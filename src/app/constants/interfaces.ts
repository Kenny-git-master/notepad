import { Delta } from "quill";

// Sidebar-------------------------------------
export interface SidebarProps extends ListButtonProps {
  memos: Memo[];
}

export interface ListButtonProps {
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

// Memo-------------------------------------
export interface Memo {
  id: string;
  title: string;
  content: Delta | null;
  date: Date;
}

export interface EditorValue {
  value: Delta | undefined;
}

// Search Title-------------------------------------
export interface PassValue {
  onValueChange: (value: string) => void;
}

export interface PassEditorValue {
  onValueChange: (value: Delta) => void;
}
