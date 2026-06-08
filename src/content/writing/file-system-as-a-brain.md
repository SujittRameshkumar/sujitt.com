---
title: "The File System as a Brain"
subtitle: "ML Anyone Can Do"
description: "I accidentally built a second brain out of markdown files in a git repo. Why structuring your life for an AI to read is the most accessible machine learning there is."
date: 2026-02-20
place: "NEW YORK, NY"
---

There is an old philosophical thought experiment that goes something like this: a man with a failing memory writes everything down in a notebook. He consults it constantly -- where to go, what he believes, who he knows. Another person simply remembers these things. The question the philosophers asked was: is the notebook part of the first man's mind?

The answer, if you take it seriously, is yes. The boundary of cognition is not the skull. It is wherever the thinking happens.

I have been thinking about this a lot lately, because I accidentally built something that made it real for me.

---

It started the way these things usually start -- with a mess. I had notes in four different apps. I had chat threads with AI assistants that contained genuinely important reflections I would never find again. I had half-finished documents in Google Docs, ideas pinned in Slack messages to myself, and a journal that lived in Apple Notes but also sometimes in a physical notebook but also sometimes in a text file on my desktop.

The information existed. But it was scattered across so many surfaces that no single system -- including my own brain -- could reason over all of it at once.

So I did what any engineer would do when the abstractions are leaking. I started over with the simplest possible primitive: **files in a folder.**

Not a new app. Not a database. Not a proprietary format. Just markdown files in a git repository.

---

Here is what I learned.

**The bottleneck in AI-assisted work is not intelligence. It is context.** We have access to models that can reason, synthesize, and generate at a level that would have seemed like science fiction five years ago. But every time you open a new chat thread, you are starting from zero. The model knows nothing about you, your projects, your patterns, your history. You spend the first half of every conversation re-explaining who you are.

Chat threads are context graveyards. The best insight you ever had with an AI assistant is buried in a conversation from three weeks ago that you will never reopen.

What if, instead, you maintained a structured set of files that an AI agent could read and write to? Not a chat log. Not a wiki. A living repository -- persistent, organized memory that something other than your brain can reason over.

That is what I built. And the strange thing is how natural it felt.

---

There is a long lineage behind this idea, even if I did not know it at the time. People have been dreaming about machines that extend human memory since at least the 1940s, when an engineer proposed a hypothetical device -- a desk with screens and levers -- that would let a researcher follow trails of association through their personal archive of documents. The machine was never built, but the vision was prophetic: knowledge is not about storage. It is about **trails.** The connections between things.

A couple decades later, another thinker coined the word "hypertext" and imagined a global system of interconnected documents. That vision eventually became the web, though in a much cruder form than he intended. What got lost in translation was the personal dimension. The web became a place for publishing, not for thinking.

Meanwhile, a sociologist in the mid-20th century built one of the most productive intellectual systems in history using nothing more than index cards in a wooden box. His method was simple: write one idea per card, link cards to each other, and let the network grow. He did not pre-organize by category. He let structure emerge from connection. The box became a conversation partner -- he described it as a system that could surprise him with its own ideas.

All of these people were circling the same insight: **cognition is not something that happens exclusively inside your head.** When you write a thought down and organize it so you can find it later, the notebook is doing cognitive work. When the notebook can link to other notebooks, it starts to do something that looks like associative memory. And when something can read those notebooks and reason about them -- now you have externalized thought that compounds.

---

The practical version of this is simpler than it sounds.

I have a folder. Inside it, there are files for different domains of my life and work. Some track my current state -- what I am focused on, what is unresolved, what my energy level is. Some capture relationships and the evolving context around people I interact with. Some hold goals and the strategies I am pursuing. Some are raw journal entries. Some are hard-won lessons extracted from experience.

There is a single instruction file at the root that acts as a **routing table.** It tells the AI: if the conversation is about X, read files Y and Z first. If it is about something else, start with A and B. The agent does not read everything every time. It allocates its attention based on what is relevant. This is not a complicated system. It is just a map.

And the files are not static containers. **They are organisms.** A note becomes a file. A file that gets too long becomes a directory. A directory that develops its own internal logic becomes a sub-system. I do not pre-split things. I let the content prove it needs more space. Premature structure creates empty scaffolding that you feel obligated to fill. Organic growth creates structure that earns its complexity.

The trigger to restructure is not "this would look cleaner." It is: **this is too large for useful consumption in one read.** The system optimizes for its own ability to reason, not for human folder aesthetics.

---

Here is the part that surprised me.

When you structure information so that an AI can consume it effectively -- when you decide what gets its own file, what links to what, what context is essential versus noisy -- you are doing something that rhymes with machine learning. Not with weights and gradients and loss functions. But with context and structure and attention.

You are shaping the input space so that the reasoning engine produces better outputs. You are deciding what signal to amplify and what noise to suppress. You are building a representation of your world that is optimized for a specific kind of inference.

**This is ML anyone can do.** You do not need a GPU cluster. You do not need a PhD. You need a folder, some markdown files, and the willingness to externalize what you know in a way that is structured enough for something else to think with.

The "training data" is your life. The "model" is whatever AI you point at the repository. And the "fine-tuning" is the ongoing act of organizing, refining, and connecting your notes so the system gets smarter over time.

---

What makes this different from a note-taking app or a personal wiki is that the output is not just retrieval. It is reasoning. The system does not just hand you back what you wrote. It connects things you did not connect. It notices patterns across entries that span months. It holds you accountable to things you said three weeks ago that you conveniently forgot.

And because it is just files in a git repo, you own it completely. There is no vendor lock-in. There is no proprietary format. You can version control your own thinking. Run `git log` and you have an archaeological record of how your mind evolved -- what you believed in January that you revised by March, what you were worried about that turned out to be nothing, what kept showing up in your entries that you refused to look at directly.

The same architecture works across domains. I have used it for personal life -- journaling, tracking relationships, processing emotions. I have used it for software projects -- product strategy, technical decisions, institutional knowledge. The structure adapts because it is not a template. It is a pattern. Files, links, routing, organic growth. It scales from a personal journal to a team knowledge base without changing its fundamental nature.

---

I think we are in the early innings of something. The tools we have for thinking with AI are still built around the chat paradigm -- ephemeral, sessionless, stateless. But the people who are getting disproportionate value from AI are the ones who have figured out how to give it memory. Not by waiting for the models to get better at remembering, but by building the memory layer themselves.

The file system is the oldest, most universal, most portable abstraction in computing. It turns out it might also be the most natural interface between a human mind and a machine one.

What would it look like if you took your own knowledge seriously enough to structure it for something other than yourself to read?
