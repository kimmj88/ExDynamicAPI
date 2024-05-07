const pragmaOptionFK = 'PRAGMA foreign_keys = ON;';
const pragmaOptionNM = 'PRAGMA synchronous = NORMAL';
const pragmaOptionJM = 'PRAGMA  journal_mode = DELETE';

const versionSchema = `
CREATE TABLE IF NOT EXISTS version
    (
      version_key INTEGER PRIMARY KEY AUTOINCREMENT,
      version TEXT NOT NULL,
      release_dttm TEXT NOT NULL,
      install_dttm TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
      build_number INTEGER NOT NULL
    );`;


const profileSchema = `
    CREATE TABLE IF NOT EXISTS profile(
      section TEXT NOT NULL,
      type TEXT NOT NULL,
      entry TEXT NOT NULL,
      value TEXT,
      UNIQUE(section, entry)
    );
    `;

const dbtypeSchema = `
    CREATE TABLE IF NOT EXISTS dbtype(
      dbtype_code INTEGER PRIMARY KEY,
      name TEXT NOT NULL,
      UNIQUE(dbtype_code, name)
    );
    `;

const dbitemSchema = `
    CREATE TABLE IF NOT EXISTS dbitem(
      dbitem_key INTEGER PRIMARY KEY AUTOINCREMENT,
      db_name TEXT NOT NULL,
      path TEXT NOT NULL,
      dbtype_code INTEGER NOT NULL,
      FOREIGN KEY(dbtype_code) REFERENCES dbtype(dbtype_code),
      UNIQUE(db_name)
    );
    `;

const dbtype_sqlite_Prevalue =
  "INSERT INTO dbtype(dbtype_code, name) VALUES('1000', 'sqlite');";

const profilePrevalue =
  "INSERT INTO profile(section, entry, type, value) VALUES('PROTOCOL', 'POLICY_TYPE', 'S', 'CAN|ETH');";

const versionPrevalue =
  "INSERT INTO version(version, release_dttm, build_number) VALUES('AUTOCRYPT PolicyGenerator Database 1.0.0', '2024/03/06 12:00:00', 1);";

export const schemaList: string[] = [
  pragmaOptionFK,
  pragmaOptionNM,
  pragmaOptionJM,
  versionSchema,
  profileSchema,
  profilePrevalue,
  dbtypeSchema,
  dbitemSchema,
  dbtype_sqlite_Prevalue
];
