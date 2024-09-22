export type EntityAttributes = {
  entityId: string;
  businessDate: string;
  legalCode: string;
  rxmId: string;
};

type DataSource = {
  text: string;
  value: string;
};

export const mockEntityAttributes: EntityAttributes[] = [
  {
    entityId: "E001",
    businessDate: "2024-09-01",
    legalCode: "LC1001",
    rxmId: "RXM001",
  },
  {
    entityId: "E002",
    businessDate: "2024-09-02",
    legalCode: "LC1002",
    rxmId: "RXM002",
  },
  {
    entityId: "E003",
    businessDate: "2024-09-03",
    legalCode: "LC1003",
    rxmId: "RXM003",
  },
  {
    entityId: "E004",
    businessDate: "2024-09-04",
    legalCode: "LC1004",
    rxmId: "RXM004",
  },
  {
    entityId: "E005",
    businessDate: "2024-09-05",
    legalCode: "LC1005",
    rxmId: "RXM005",
  },
  {
    entityId: "E006",
    businessDate: "2024-09-06",
    legalCode: "LC1006",
    rxmId: "RXM006",
  },
  {
    entityId: "E007",
    businessDate: "2024-09-07",
    legalCode: "LC1007",
    rxmId: "RXM007",
  },
  {
    entityId: "E008",
    businessDate: "2024-09-08",
    legalCode: "LC1008",
    rxmId: "RXM008",
  },
  {
    entityId: "E009",
    businessDate: "2024-09-09",
    legalCode: "LC1009",
    rxmId: "RXM009",
  },
  {
    entityId: "E010",
    businessDate: "2024-09-10",
    legalCode: "LC1010",
    rxmId: "RXM010",
  },
];

function convertToDataSource(entities: EntityAttributes[]): DataSource[] {
  return entities.map((entity) => ({
    text: entity.legalCode
      ? `${entity.rxmId}-${entity.legalCode}`
      : `${entity.rxmId}`,
    value: `${entity.entityId}:${entity.businessDate}`,
  }));
}

// Sample data
const entityAttributes: EntityAttributes[] = [
  {
    entityId: "E001",
    businessDate: "2024-09-01",
    legalCode: "LC1001",
    rxmId: "RXM001",
  },
  {
    entityId: "E002",
    businessDate: "2024-09-02",
    legalCode: "", // No legalCode provided
    rxmId: "RXM002",
  },
  {
    entityId: "E003",
    businessDate: "2024-09-03",
    legalCode: "LC1003",
    rxmId: "RXM003",
  },
];

// Convert entityAttributes to dataSource
const dataSource = convertToDataSource(entityAttributes);
console.log(dataSource);

function extractEntityAndBusinessDate(value: string): [string, string] {
  const [entityId, businessDate] = value.split(":");
  return [entityId, businessDate];
}

// Sample usage
const dataSourceValue = "E001:2024-09-01";
const [entityId, businessDate] = extractEntityAndBusinessDate(dataSourceValue);

console.log(entityId); // Output: E001
console.log(businessDate); // Output: 2024-09-01
