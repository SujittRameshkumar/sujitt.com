---
title: "The File System as a Brain"
subtitle: "ML Anyone Can Do"
description: "I keep my life in a git repo that an AI reads and writes. Why structuring your own context is the most accessible machine learning there is."
date: 2026-02-20
place: "NEW YORK, NY"
---

There's a folder on my laptop called `me/`. Inside it are markdown files: one for my current state, one for the people in my life, one for lessons I keep having to relearn, a journal directory organized by date. An AI reads these files when we talk and writes to them when something changes. A few weeks ago it quoted a training commitment back to me from a January entry, one I'd quietly stopped following and forgotten I'd ever written down. It felt like being caught by a friend with a perfect memory, which is roughly what it is.

In 1998, the philosophers Andy Clark and David Chalmers published a thought experiment about a man named Otto, who has Alzheimer's and writes everything down in a notebook he consults constantly: where to go, what he believes. His friend Inga just remembers these things. Clark and Chalmers argued that if the notebook is always there, and Otto trusts it the way Inga trusts her own recall, then it counts as part of his mind. Cognition ends wherever the thinking stops happening, not at the skull.

I read about Otto years ago and filed him away as a philosophy-seminar curiosity. Then I accidentally built his notebook. Mine reads itself.

---

It started with a mess. I had notes in four different apps, reflections buried in AI chat threads I'd never reopen, half-finished Google Docs, ideas pinned in Slack messages to myself, and a journal that lived in Apple Notes except when it lived in a physical notebook or a text file on my desktop. The information existed. No system, including my own brain, could reason over all of it at once.

So I did what engineers do when the abstractions leak: started over with the simplest thing that could work. Markdown files in a git repository.

The bottleneck in AI-assisted work is context. Every new chat starts from zero; the model knows nothing about you or your history, so you burn the first half of every conversation re-explaining who you are. Chat threads are context graveyards. The best insight you ever had with an AI assistant is buried in a conversation from three weeks ago that you'll never open again.

What you want is memory that something other than your brain can reason over: structured files the AI reads and writes.

---

The idea has a lineage. Vannevar Bush sketched the memex in a 1945 Atlantic essay called "As We May Think": a desk of microfilm and levers that would let a researcher follow trails of association through a personal archive. It was never built, but Bush had seen the important part, that knowledge lives in the trails, not the storage. Niklas Luhmann, a German sociologist, ran one of the most productive academic careers of the twentieth century out of wooden cabinets holding ninety thousand index cards, one idea per card, each linked to others. He didn't organize by category; he let structure emerge from connection, and he described the cabinet as a conversation partner that surprised him with its own ideas.

The memex stayed a sketch. Luhmann's cabinet worked.

---

The practical version is almost embarrassingly simple.

Different files hold different domains: current state, relationships, goals, raw journal entries, hard-won lessons. At the root sits one instruction file that works like a routing table. If the conversation is about X, read files Y and Z first. The agent doesn't read everything every time; it spends its attention on what's relevant. None of this is complicated. It's a map.

A note becomes a file. A file that gets too long becomes a directory with its own internal logic. I don't pre-split anything, because splitting early just creates empty folders you feel obligated to fill. The test for restructuring is whether a file still reads usefully in one pass, because the folders aren't there to be admired. They're there to be thought with.

---

When you decide what gets its own file, what links to what, which context is essential and which is noise, you're shaping the input space so a reasoning engine produces better outputs. Machine learning has names for this work: feature engineering, context engineering. It's the unglamorous side of the field, and it's also where applied ML actually wins. Andrew Ng built a whole movement, data-centric AI, around the observation that in production you get further fixing the data than swapping the model.

Nobody is computing gradients in their journal. There are no weights here, no loss function, nothing to train. But the part of the field that ran on GPUs was never the part that needed you. Deciding what the system sees and how it's shaped has always been human work, and it's fully available to anyone with a folder, some markdown, and the willingness to structure what they know for something other than themselves to read.

---

What separates this from a note-taking app is what comes back out. The system connects entries that span months, and it holds you to things you said and would prefer to forget. Retrieval gives you your past. Reasoning gives you your blind spots.

And because it's files in a git repo, you own it completely. No vendor, no export button to pray over. Run `git log` and you get an archaeological record of your own head: what you believed in January and had revised by March, what kept showing up in entries you refused to look at directly.

---

Otto's notebook held his memory, but it could never surprise him. Mine surprises me about once a week, most recently with the observation that almost nothing I bother to write down is the headline event of a day. The tools we have for thinking with AI are still mostly chat, ephemeral by design, and the people getting the most out of these models haven't waited for the labs to ship memory. They built it themselves, out of the oldest and most portable abstraction in computing: files in a folder.
