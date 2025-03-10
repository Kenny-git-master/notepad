// Sidebar-------------------------------------
export interface SidebarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (open: boolean) => void;
}

export interface SidebarHeaderProps {
  onClose: () => void;
}

// Navigation-------------------------------------
export interface Navigation {
  text: string;
  href: string;
}

// SubContents-------------------------------------
export interface Contents {
  id: string;
  title: string;
  text: string;
}
