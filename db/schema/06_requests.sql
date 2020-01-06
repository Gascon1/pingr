-- Drop and recreate requests table (Example)

DROP TABLE IF EXISTS requests CASCADE;
CREATE TABLE requests (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id),
  business_id INTEGER REFERENCES businesses(id) DEFAULT NULL,
  category_id INTEGER REFERENCES categories(id) NOT NULL,
  service_id INTEGER REFERENCES services(id) NOT NULL,
  status_id INTEGER REFERENCES statuses(id) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, 
  is_prepaid BOOLEAN NOT NULL DEFAULT FALSE,
  start_time TIMESTAMP NOT NULL,
  end_time TIMESTAMP NOT NULL
);
