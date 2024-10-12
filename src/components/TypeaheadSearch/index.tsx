// src/TypeaheadSearch.tsx

import React, { useState, useEffect, useCallback, ChangeEvent } from "react";
import debounce from "lodash.debounce";
import { Suggestion } from "./types";

const TypeaheadSearch: React.FC = () => {
  // State to manage the search input and search results
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<Suggestion[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Function to fetch suggestions from the Datamuse API
  const fetchSuggestions = async (searchQuery: string): Promise<void> => {
    if (!searchQuery) {
      setResults([]); // Clear results if search query is empty
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(
        `https://api.datamuse.com/sug?s=${encodeURIComponent(searchQuery)}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data: Suggestion[] = await response.json();
      setResults(data);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  // Debounce the fetchSuggestions function to limit API calls
  const debouncedFetchSuggestions = useCallback(
    debounce((nextValue: string) => {
      fetchSuggestions(nextValue);
    }, 300),
    [] // The empty array ensures that the debounce function is created only once
  );

  // Effect to trigger debounced fetch when query changes
  useEffect(() => {
    debouncedFetchSuggestions(query);
    // Cancel the debounce on useEffect cleanup.
    return () => {
      debouncedFetchSuggestions.cancel();
    };
  }, [query, debouncedFetchSuggestions]);

  // Handle input change
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setQuery(e.target.value);
  };

  return (
    <div style={styles.container}>
      <h2>Typeahead Search with Debouncing</h2>
      <input
        type="text"
        placeholder="Type a word..."
        value={query}
        onChange={handleInputChange}
        style={styles.input}
      />
      {isLoading && <p>Loading...</p>}
      <ul style={styles.list}>
        {results.map((result, index) => (
          <li key={index} style={styles.listItem}>
            {result.word}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Simple inline styles for better presentation
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    width: "300px",
    margin: "50px auto",
    fontFamily: "Arial, sans-serif",
  },
  input: {
    width: "100%",
    padding: "8px",
    fontSize: "16px",
    boxSizing: "border-box",
  },
  list: {
    listStyleType: "none",
    padding: 0,
    marginTop: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    maxHeight: "200px",
    overflowY: "auto",
  },
  listItem: {
    padding: "8px",
    borderBottom: "1px solid #eee",
    cursor: "pointer",
  },
};

export default TypeaheadSearch;
