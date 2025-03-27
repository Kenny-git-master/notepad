import { MemoInfo } from "@/app/constants/siteConfig";
import { Memo } from "@/app/constants/interfaces";

/**
 * IndexedDB を開く
 * @returns Request Result
 */
const openDB = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(MemoInfo.DB_NAME, MemoInfo.DB_VERSION);

    req.onupgradeneeded = (e) => {
      const db = (e.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(MemoInfo.STORE_NAME)) {
        db.createObjectStore(MemoInfo.STORE_NAME, { keyPath: "id" });
      }
    };

    req.onsuccess = () => resolve(req.result);
    req.onerror = () => {
      console.error("Failed to open IndexedDB:", req.error);
      reject(req.error);
    };
  });
};

/**
 * メモを保存または更新する
 * @param memo Memo
 */
export const saveMemo = async (memo: Memo): Promise<void> => {
  try {
    const db = await openDB();
    const tx = db.transaction(MemoInfo.STORE_NAME, "readwrite");
    const store = tx.objectStore(MemoInfo.STORE_NAME);
    store.put(memo);

    return new Promise<void>((resolve, reject) => {
      tx.oncomplete = () => resolve();
      tx.onerror = () => {
        console.error("Failed to save memo:", tx.error);
        reject(tx.error);
      };
    });
  } catch (error) {
    console.error("Error in saveMemo:", error);
    throw error;
  }
};

/**
 * すべてのメモを取得する
 * @returns Memo List
 */
export const getAllMemos = async (): Promise<Memo[]> => {
  try {
    const db = await openDB();
    const tx = db.transaction(MemoInfo.STORE_NAME, "readonly");
    const store = tx.objectStore(MemoInfo.STORE_NAME);
    const req = store.getAll();

    return new Promise<Memo[]>((resolve, reject) => {
      req.onsuccess = () => resolve(req.result as Memo[]);
      req.onerror = () => {
        console.error("Failed to fetch all memos:", req.error);
        reject(req.error);
      };
    });
  } catch (error) {
    console.error("Error in getAllMemos:", error);
    throw error;
  }
};

/**
 * ID を指定してメモを取得する
 * @returns Memo
 */
export const getMemoById = async (id: string): Promise<Memo | null> => {
  try {
    const db = await openDB();
    const tx = db.transaction(MemoInfo.STORE_NAME, "readonly");
    const store = tx.objectStore(MemoInfo.STORE_NAME);
    const req = store.get(id);

    return new Promise<Memo | null>((resolve, reject) => {
      req.onsuccess = () => resolve(req.result ?? null);
      req.onerror = () => {
        console.error(`Failed to fetch memo (ID: ${id}):`, req.error);
        reject(req.error);
      };
    });
  } catch (error) {
    console.error("Error in getMemoById:", error);
    throw error;
  }
};

/**
 * 指定した ID のメモを削除する
 * @param id Memo ID
 */
export const deleteMemo = async (id: string): Promise<void> => {
  try {
    const db = await openDB();
    const tx = db.transaction(MemoInfo.STORE_NAME, "readwrite");
    const store = tx.objectStore(MemoInfo.STORE_NAME);
    store.delete(id);

    return new Promise<void>((resolve, reject) => {
      tx.oncomplete = () => resolve();
      tx.onerror = () => {
        console.error(`Failed to delete memo (ID: ${id}):`, tx.error);
        reject(tx.error);
      };
    });
  } catch (error) {
    console.error("Error in deleteMemo:", error);
    throw error;
  }
};
