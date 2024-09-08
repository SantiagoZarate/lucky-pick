CREATE TABLE `raffle` (
	`id` text PRIMARY KEY NOT NULL,
	`public_url` text NOT NULL,
	`title` text NOT NULL,
	`price_per_ticket` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `ticket` (
	`id` integer PRIMARY KEY NOT NULL,
	`purchased_by` text,
	`available` integer DEFAULT false,
	`raffle_id` text NOT NULL,
	FOREIGN KEY (`raffle_id`) REFERENCES `raffle`(`id`) ON UPDATE no action ON DELETE CASCADE
);
--> statement-breakpoint
CREATE UNIQUE INDEX `raffle_public_url_unique` ON `raffle` (`public_url`);