-- Adminer 4.8.1 PostgreSQL 13.11 (Debian 13.11-0+deb11u1) dump

DROP TABLE IF EXISTS "user";
DROP SEQUENCE IF EXISTS user_id_seq;
CREATE SEQUENCE user_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1;

CREATE TABLE "public"."user" (
    "id" bigint DEFAULT nextval('user_id_seq') NOT NULL,
    "name" character varying(140) NOT NULL,
    "email" character varying(140) NOT NULL,
    "password" text NOT NULL,
    CONSTRAINT "user_email" UNIQUE ("email"),
    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
) WITH (oids = false);


-- 2023-10-08 10:17:23.805377+07
