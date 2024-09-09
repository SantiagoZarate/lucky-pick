CREATE TABLE `raffle` (
	`id` text PRIMARY KEY NOT NULL,
	`public_url` text NOT NULL,
	`title` text NOT NULL,
	`price_per_ticket` integer NOT NULL,
	`prizes` text
);
--> statement-breakpoint
CREATE TABLE `ticket` (
	`id` integer NOT NULL,
	`purchased_by` text,
	`available` integer DEFAULT true,
	`raffle_id` text NOT NULL,
  PRIMARY KEY (`id`, `raffle_id`),
	FOREIGN KEY (`raffle_id`) REFERENCES `raffle`(`id`) ON UPDATE no action ON DELETE CASCADE
);
--> statement-breakpoint
CREATE UNIQUE INDEX `raffle_public_url_unique` ON `raffle` (`public_url`);