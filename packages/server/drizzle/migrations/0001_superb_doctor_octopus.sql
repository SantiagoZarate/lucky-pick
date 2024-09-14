DROP TABLE IF EXISTS `raffle`;--> statement-breakpoint
CREATE TABLE `user` (
	`id` text PRIMARY KEY NOT NULL,
	`username` text NOT NULL,
	`email` text NOT NULL,
	`password` text NOT NULL
);--> statement-breakpoint
CREATE TABLE `raffle` (
	`id` text PRIMARY KEY NOT NULL,
	`public_url` text NOT NULL,
	`title` text NOT NULL,
	`price_per_ticket` integer NOT NULL,
	`prizes` text,
  `user_id` text NOT NULL,
  `timestamp` text DEFAULT (CURRENT_TIMESTAMP),
  FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE CASCADE
);--> statement-breakpoint
CREATE UNIQUE INDEX `user_username_unique` ON `user` (`username`);--> statement-breakpoint
CREATE UNIQUE INDEX `user_email_unique` ON `user` (`email`);