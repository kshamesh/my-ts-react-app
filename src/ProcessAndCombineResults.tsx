import React from "react";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

// ApiResponse interface representing the data structure returned by the API
interface EntityNameResponse {
  id: number;
  name: string;
}

// IService interface defining the contract for the service layer
interface IEntityNameService {
  getEntityNames(rxmIds: string[]): Promise<EntityNameResponse[]>;
}

// ApiService class responsible for making the API call
class EntityNameService implements IEntityNameService {
  private readonly endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  async getEntityNames(data: string[]): Promise<EntityNameResponse[]> {
    // const response = await axios.post<ApiResponse[]>(this.endpoint, data);
    console.log(data);
    const response = await axios.get<EntityNameResponse[]>(this.endpoint);
    //jsonplaceholder.typicode.com/posts
    return response.data;
  }
}

// ChunkProcessor class responsible for processing the data chunks
class RxmIdChunkProcessor {
  private readonly service: IEntityNameService;
  private readonly chunkSize: number;

  constructor(service: IEntityNameService, chunkSize: number = 10000) {
    this.service = service;
    this.chunkSize = chunkSize;
  }

  chunkArray<T>(arr: T[]): T[][] {
    const result: T[][] = [];
    for (let index = 0; index < arr.length; index += this.chunkSize) {
      const chunk = arr.slice(index, index + this.chunkSize);
      result.push(chunk);
    }
    return result;
  }

  async processRxmIdChunks(data: string[]): Promise<EntityNameResponse[]> {
    const chunkedArray = this.chunkArray(data);
    const promises: Promise<EntityNameResponse[]>[] = chunkedArray.map(
      (chunk) => this.service.getEntityNames(chunk)
    );
    const resultsArray: EntityNameResponse[][] = await Promise.all(promises);
    return resultsArray.flat();
  }
}

// React component responsible for managing the UI and initiating the process
const ProcessAndCombineResults: React.FC = () => {
  //const queryClient = useQueryClient();
  const entityNameService = new EntityNameService(
    "https://jsonplaceholder.typicode.com/albums"
  );
  const rxmIdChunkProcessor = new RxmIdChunkProcessor(entityNameService);

  //   const mutation = useMutation((data: string[]) => apiService.postData(data), {
  //     onSuccess: (data) => {
  //       console.log("Received data:", data);
  //     },
  //     onError: (error) => {
  //       console.error("An error occurred:", error);
  //     },
  //   });

  React.useEffect(() => {
    const enrichEntityNames = async () => {
      const rxmIdArray: string[] = new Array(58000)
        .fill(null)
        .map((_, i) => `Element ${i + 1}`);
      try {
        const combinedResults = await rxmIdChunkProcessor.processRxmIdChunks(
          rxmIdArray
        );
        console.log("Total Results:", combinedResults.length);
      } catch (error) {
        console.error("Error during processing:", error);
      }
    };

    enrichEntityNames();
  }, []);

  return <div>Processing data...</div>;
};

export default ProcessAndCombineResults;
