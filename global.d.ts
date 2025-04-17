declare global {
  interface Window {
    services: {
      writeTextFile: (text: string) => string;
      writeImageFile: (image: string) => string;
      readFile: (path: string) => string;
      showOpenDialog: (options: any) => string[];
      showSaveDialog: (options: any) => string;
      showOpenFileDialog: (options: any) => string[];
      showSaveFileDialog: (options: any) => string;
      showOpenFolderDialog: (options: any) => string[];
      showSaveFolderDialog: (options: any) => string;
      showOpenDirectoryDialog: (options: any) => string[];
      showSaveDirectoryDialog: (options: any) => string;
    };
  }
}

export {};
