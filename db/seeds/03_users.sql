-- -- Users table seeds here (Example)
INSERT INTO users (first_name, last_name, phone, email, password, business_id)
VALUES ('Jeff', 'Gebert','3065307801', 'jeffgebert@hotmail.com', crypt('password', gen_salt('bf')), 2),
  ('Jeff', 'Gebert','3065307801', 'jeffgebert2@hotmail.com', crypt('password', gen_salt('bf')), 3);


