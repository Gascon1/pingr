-- Drop and recreate requests table (Example)

DROP TABLE IF EXISTS requests CASCADE;

set timezone to 'EST';

CREATE TABLE requests (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id),
  business_id INTEGER REFERENCES businesses(id) DEFAULT 1,
  service_id INTEGER REFERENCES services(id) DEFAULT NULL,
  request_service_name VARCHAR(255) DEFAULT NULL, 
  category_id INTEGER REFERENCES categories(id) NOT NULL,
  status_id INTEGER REFERENCES statuses(id) DEFAULT 1,
  created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP, 
  availability_start_time TIMESTAMPTZ NOT NULL,
  availability_end_time TIMESTAMPTZ NOT NULL,
  appointment_start_time TIMESTAMPTZ DEFAULT NULL,
  appointment_end_time TIMESTAMPTZ DEFAULT NULL,
  max_price DECIMAL(6,2) NOT NULL
);
