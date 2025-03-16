import { MemoInfo } from "@/app/constants/siteConfig";
import { Memo } from "@/app/constants/interfaces";

/**
 *
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
    req.onerror = () => reject(req.error);
  });
};

/**
 *
 * @param memo Memo
 * @returns Request Result
 * @description save/update memo
 */
export const saveMemo = async (memo: Memo): Promise<void> => {
  const db = await openDB();
  const tx = db.transaction(MemoInfo.STORE_NAME, "readwrite");
  const store = tx.objectStore(MemoInfo.STORE_NAME);
  store.put(memo);

  return new Promise<void>((resolve, reject) => {
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
};

/**
 *
 * @returns Memo List
 */
export const getAllMemos = async (): Promise<Memo[]> => {
  const db = await openDB();
  const tx = db.transaction(MemoInfo.STORE_NAME, "readonly");
  const store = tx.objectStore(MemoInfo.STORE_NAME);
  const req = store.getAll();

  return new Promise<Memo[]>((resolve, reject) => {
    req.onsuccess = () => resolve(req.result as Memo[]);
    req.onerror = () => reject(req.error);
  });
};

/**
 *
 * @returns Memo
 */
export const getMemoById = async (id: string): Promise<Memo> => {
  const db = await openDB();
  const tx = db.transaction(MemoInfo.STORE_NAME, "readonly");
  const store = tx.objectStore(MemoInfo.STORE_NAME);
  const req = store.get(id);

  return new Promise<Memo>((resolve, reject) => {
    req.onsuccess = () => resolve(req.result as Memo);
    req.onerror = () => reject(req.error);
  });
};

/**
 *
 * @param id Memo ID
 * @returns Request Result
 * @description delete selected memo
 *
 */
export const deleteMemo = async (id: string): Promise<void> => {
  const db = await openDB();
  const tx = db.transaction(MemoInfo.STORE_NAME, "readwrite");
  const store = tx.objectStore(MemoInfo.STORE_NAME);
  store.delete(id);

  return new Promise<void>((resolve, reject) => {
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
};
