-- Drop and recreate requests table (Example)

DROP TABLE IF EXISTS requests CASCADE;

set timezone to 'EST';

CREATE TABLE requests (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id),
  business_id INTEGER REFERENCES businesses(id) DEFAULT NULL,
  category_id INTEGER REFERENCES categories(id) NOT NULL,
  service_id INTEGER REFERENCES services(id) NOT NULL,
  status_id INTEGER REFERENCES statuses(id) NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP, 
  availibility_start_time TIMESTAMPTZ NOT NULL,
  availibility_end_time TIMESTAMPTZ NOT NULL,
  appointment_start_time TIMESTAMPTZ DEFAULT NULL,
  appointment_end_time TIMESTAMPTZ DEFAULT NULL,
  max_price DECIMAL(6,2) NOT NULL
);
