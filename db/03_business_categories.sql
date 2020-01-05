-- Drop and recreate business_categories table (Example)

DROP TABLE IF EXISTS business_categories CASCADE;
CREATE TABLE business_categories (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL
);
