export interface PR {
  id: number;
  title: string;
  htmlUrl: string;
  head: {
    repo: {
      name: string;
    };
  };
}
export interface PRListProps {
  prs: PR[];
}
