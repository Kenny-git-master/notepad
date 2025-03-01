// Sidebar-------------------------------------
export interface SidebarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (open: boolean) => void;
}

export interface SidebarHeaderProps {
  onClose: () => void;
}
