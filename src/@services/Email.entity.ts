export type Email = {
  archiveUntil: number;
  createdAt: number;
  creator: {
    firstName: string;
    id: string;
    lastName: string;
  };
  deletedAt: number | null;
  description: string;
  genesisArchivingDate: number;
  hardDeletedAt: number | null;
  isFinalized: boolean;
  name: string;
  parent: string;
  path: string;
  size: number;
  tags: string[];
  timestamps: {
    USD: {
      rootHash: string;
      seedId: string;
      status: number;
      transaction: string;
    };
  };
  searchAttributes: {
    name: string;
    value: string;
  }[];
};
