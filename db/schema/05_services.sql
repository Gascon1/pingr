-- Drop and recreate services table (Example)

DROP TABLE IF EXISTS services CASCADE;
CREATE TABLE services (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  business_id INTEGER REFERENCES businesses(id) DEFAULT NULL,
  category_id INTEGER REFERENCES categories(id) NOT NULL,
  description VARCHAR(255) NOT NULL,
  transaction_price DECIMAL(10,2) NOT NULL,
  duration DECIMAL(6) NOT NULL
);
