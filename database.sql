CREATE TABLE "person" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);
	
	CREATE TABLE "customer_info" (
	"id" SERIAL PRIMARY KEY,
	"customers_full_name" VARCHAR (100) NOT NULL,
	"pro_nouns" TEXT,
	"email" VARCHAR (200),
	"phone_number" VARCHAR (20) NOT NULL,
	"customer_notes" VARCHAR (1000),
	"is_active" BOOLEAN DEFAULT TRUE);
	
	CREATE TABLE "project"(
	"id" SERIAL PRIMARY KEY,
	"project_name" VARCHAR (100),
	"brand" VARCHAR (100),
	"deep_custom" BOOLEAN,
	"project_desc" TEXT,
	"cust_height" VARCHAR (20),
	"cust_inseam" VARCHAR (20),
	"cust_torso" VARCHAR (20),
	"cust_flex" INT,
	"cust_reach" VARCHAR (20),
	"head_tube" VARCHAR (20),
	"steerer_Tube" VARCHAR (20),
	"top_tube" VARCHAR (20),
	"down_tube" VARCHAR (20),
	"seat_tube" VARCHAR (20),
	"bottom_braket" VARCHAR (20),
	"seat_stays" VARCHAR (20),
	"chain_stays" VARCHAR (20),	
	"drop_outs" VARCHAR (20),
	"brake_type" VARCHAR (20),
	"wheel_size" VARCHAR (20),
	"tire_clearance" VARCHAR (20),
	"client_id" INT REFERENCES "customer_info"("id"));

-- Stock database input --
INSERT INTO "customer_info"
                     ("customers_full_name", 
                      "pro_nouns", 
                      "email",
                      "phone_number", 
                      "customer_notes") 
                      VALUES ('Jesse Sparkle', 'they/them', 'unknown@mail.com', '(123)456-7890', 'Customer wants the the fastest steel framed bike money can buy.' ) RETURNING "id";

-- This will create a stock "client file" to play around in. --