-- Drop and recreate businesses table (Example)

DROP TABLE IF EXISTS businesses CASCADE;
CREATE TABLE businesses (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(15) NOT NULL,
  address VARCHAR(255) NOT NULL,
  business_category_id INTEGER REFERENCES business_categories(id)
);
