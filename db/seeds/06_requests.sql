-- Requests table seeds here (Example)
INSERT INTO requests (business_id, user_id, category_id, service_id, status_id,
 created_at, availability_start_time, availability_end_time, appointment_start_time, appointment_end_time, max_price, request_service_name)
VALUES
       (1,1,1,null,1, '2020-01-06 16:25:32.153', '2020-01-13 18:00:00', '2020-01-14 19:00:00', null, null, 100.00,'Swedish massage'),
       (1,1,1,null,1, '2020-01-06 16:25:32.153', '2020-01-15 17:00:00', '2020-01-17 20:00:00', null, null, 100.00,'Deep tissue massage'),
       (1,1,1,null,4, '2020-01-06 16:25:32.153', '2020-01-08 17:00:00', '2020-01-8 20:00:00', null, null, 100.00,'Deep tissue massage'),
       (1,1,1,null,5, '2020-01-06 16:25:32.153', '2020-01-08 14:00:00', '2020-01-8 16:00:00', null, null, 100.00,'Deep tissue massage'),
       (2,1,1,1,3, '2020-01-06 16:25:32.153', '2020-01-08 14:00:00', '2020-01-8 16:00:00', '2020-01-08 15:00:00', '2020-01-08 15:00:00', 100.00,'Deep tissue massage'),

       (1,2,2,null,1, '2020-01-06 16:25:32.153', '2020-01-15 19:00:00', '2020-01-17 20:30:00', null, null, 100.00,'deep tissue massage'),

       (4,3,3,8,4, '2020-01-06 16:25:32.153', '2020-01-06 19:00:00', '2020-01-06 20:30:00', null, null, 100.00,'other service'),
       
       (4,3,3,8,5, '2020-01-06 16:25:32.153', '2020-01-06 19:00:00', '2020-01-06 20:30:00', null, null, 100.00,'2 other service');
