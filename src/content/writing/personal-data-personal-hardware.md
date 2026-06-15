---
title: "Personal Data Requires Personal Hardware"
description: "The most intimate record of your life has quietly migrated to machines you don't own. An argument for local-first computing, made on feel rather than abstraction."
date: 2026-02-20
place: "NEW YORK, NY"
---

There's a version of my life that exists entirely on other people's computers.

My iMessages live on Apple's servers. My photos and calendar sit in Google's cloud. My fitness data, every heart rate variability reading and sleep score, lives on Whoop's infrastructure. My notes, my goals, my half-formed ideas about who I want to become: those are on Notion's servers somewhere in Virginia or Oregon, humming in a data center I'll never visit.

I never signed up for this. Nobody does. You start using tools, and slowly the most intimate record of your life migrates to machines you don't own, maintained by companies whose incentives aren't yours.

What forced the issue for me was building [a system for my own thinking](/writing/file-system-as-a-brain): my journals and goals in plain text on my own machine, with an AI that helps me reason through them. The deeper I got, the more convinced I became that this category of data belongs on hardware you own. I got here on feel, not on a privacy argument.

---

Here's a thought experiment I keep coming back to. Your diary lives in your house, on your desk, where it's always lived. When you want help thinking something through, you read it aloud to a friend who has amnesia. They listen carefully, help you reason, offer a reflection, and then forget everything. Tomorrow, if you want their help again, you read it aloud again. They never accumulate a profile of you. They never sell your patterns to an advertiser. They help you think, and then they let go.

That's what local-first computing feels like when the intelligence comes through a zero-retention API, an AI you call over the wire that's contractually barred from keeping what you send. The data stays yours. The intelligence is borrowed, not entangled. You're trusting a contract, for now; a local model eventually removes even that.

Andy Clark and David Chalmers argued back in 1998 that minds don't stop at skulls, that a notebook or a phone, once it's reliable enough and wired deep enough into how you think, becomes part of your cognitive architecture. The extended-mind thesis predates large language models by decades, and in 2026 it stops being a seminar question. If these tools really are extensions of your mind, then whoever controls them controls part of your thinking. When your extended mind lives on a corporate server, someone else holds the keys to part of your cognition. That should feel stranger than it does.

---

A friend pushed back on this recently with the practical case: the cloud syncs everywhere, backs up automatically, works from any device. Why take on the friction of running your own setup?

He's right, and the local-first argument falls apart the moment it pretends convenience doesn't exist. Convenience is the entire story of how we got here. We handed our data to the cloud because the cloud is easy and self-hosting isn't.

But his framing smuggles in an assumption: that someone else's platform has to be the source of truth. Local-first still uses the cloud. The files live on your machine and the cloud is optional transport. Sync if you want, encrypted, through infrastructure you choose. The cloud becomes a utility instead of a landlord.

The difference compounds. When your data is native to someone else's platform, you're locked into their format and whatever export they feel like offering. When it's plain markdown on your own disk, you can read every word of it, edit what the AI wrote, and swap the AI entirely, a different model next month, a local model next year, because the data is readable by anything.

Inspectability is the part that surprised me. A black-box knowledge system asks you to trust the machine's picture of you. Plain English files on your own disk let you check. You can see exactly what the AI thinks it knows about you and say no, that's wrong, here's what actually happened. That's most of the difference between a tool you use and a profile that gets used on you.

---

The other thing ownership buys you is the ability to fight friction.

The gap between having an insight and capturing it is enormous. I was at a show in Bushwick in February when something clicked, a connection between an idea I'd been chewing on and a thing a friend had said the week before. The only reason it survived the night is that I could reach my files right there from the crowd.

I think about this as a friction ladder. At the top is the laptop: high friction, deep engagement, where you can sit down and structure your thoughts for an hour. Below it is the phone, where I can SSH into my home machine from anywhere and jot a thought in thirty seconds. Below that, eventually, voice, then ambient capture. Each rung shrinks the distance between a thought and its preservation. And yes, SSH from a phone is more friction than a notes app. That's the trade I said I'd accept, and the payoff is that every rung reads and writes the same plain files.

Most tools live at one rung. A beautiful journaling app on your laptop doesn't help at midnight when something surfaces, and a quick-capture widget doesn't give you room for real reflection. The system has to span the ladder, and the data has to flow freely between rungs. Plain text flows. There's no API rate limit on reading a file, and no subscription tier that gates your own memories.

---

There's a bigger shift underneath all this. AI assistants are getting personal, and not in the way a targeted ad is personal: they're starting to know your patterns, the kind of material that used to exist only in a private journal. A lot of that material already lives on machines nobody would choose deliberately; therapy notes sit in some practice-management SaaS, waiting to become somebody's breach disclosure. Forget the credit card number. The most intimate data you'll ever generate is the running record of your own life, the map of who you're trying to become, and it's exactly the raw material for tools that will soon know you better than most of your friends do.

---

I'm living in the mess of it, SSHing into my home machine from my phone in the middle of the day because I had a thought I didn't want to lose, maintaining plain text files by hand like it's 1993, asking an AI to find patterns in my own writing. It's janky. It's also mine, the way a physical book is yours and a Kindle edition is rented, even when the words are the same.

For most data, take the cloud's deal; the convenience is worth it, and I'm not moving my photo library into a closet. But the record of your inner life is not most data, and it's earned different rules. Keep it on hardware you own, in formats anything can read. Accept the friction. The friction is the price of holding your own mind, and it's lower than it's ever been.
