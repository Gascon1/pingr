-- Drop and recreate services table (Example)

DROP TABLE IF EXISTS services CASCADE;
CREATE TABLE services (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL
  business_id INTEGER REFERENCES businesses(id) DEFAULT NULL,
  business_category_id INTEGER REFERENCES business_categories(id) NOT NULL,
  description VARCHAR(255) NOT NULL,
  price DECIMAL(6,2) NOT NULL
);
