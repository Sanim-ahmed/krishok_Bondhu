#!/usr/bin/env python3
"""
Krishok Bondhu - Database Setup Script

Creates the MySQL database and tables needed for the application.
Configure MySQL connection via environment variables or edit the defaults below.
"""

import os
import pymysql

DB_USER = os.getenv("DB_USER", "root")
DB_PASSWORD = os.getenv("DB_PASSWORD", "")
DB_HOST = os.getenv("DB_HOST", "localhost")
DB_PORT = int(os.getenv("DB_PORT", "3306"))
DB_NAME = os.getenv("DB_NAME", "krishok_bondhu")


def setup():
    print(f"Connecting to MySQL at {DB_HOST}:{DB_PORT} as {DB_USER}...")

    conn = pymysql.connect(host=DB_HOST, port=DB_PORT, user=DB_USER, password=DB_PASSWORD)
    cursor = conn.cursor()

    cursor.execute(f"CREATE DATABASE IF NOT EXISTS `{DB_NAME}` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci")
    print(f"Database '{DB_NAME}' created or already exists.")

    cursor.execute(f"USE `{DB_NAME}`")

    cursor.execute("""
        CREATE TABLE IF NOT EXISTS `users` (
            `id` INT AUTO_INCREMENT PRIMARY KEY,
            `name` VARCHAR(100) NOT NULL,
            `email` VARCHAR(191) NOT NULL UNIQUE,
            `phone` VARCHAR(20) DEFAULT NULL UNIQUE,
            `password_hash` VARCHAR(255) NOT NULL,
            `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
            INDEX `ix_users_email` (`email`),
            INDEX `ix_users_phone` (`phone`)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    """)
    print("Table 'users' created or already exists.")

    conn.commit()
    cursor.close()
    conn.close()
    print("Database setup complete!")


if __name__ == "__main__":
    setup()
