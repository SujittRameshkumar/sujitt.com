---
title: "The File System as a Brain"
subtitle: "ML Anyone Can Do"
description: "I accidentally built a second brain out of markdown files in a git repo. Why structuring your life for an AI to read is the most accessible machine learning there is."
date: 2026-02-20
place: "NEW YORK, NY"
---

There's an old philosophical thought experiment that goes something like this. A man with a failing memory writes everything down in a notebook, and he consults it constantly for where to go, what he believes, who he knows. Another person just remembers these things. The question the philosophers asked was whether the notebook counts as part of the first man's mind.

If you take it seriously, the answer is yes. The boundary of cognition runs not around the skull but around wherever the thinking actually happens.

I've been thinking about this a lot lately, because I accidentally built something that made it real for me.

---

It started the way these things usually start, with a mess. I had notes in four different apps, and chat threads with AI assistants that contained reflections I'd never find again. I had half-finished documents in Google Docs, ideas pinned in Slack messages to myself, and a journal that lived in Apple Notes but also sometimes in a physical notebook and sometimes in a text file on my desktop.

The information existed, but it was scattered across so many surfaces that no single system, including my own brain, could reason over all of it at once.

So I did what any engineer does when the abstractions are leaking. I started over with the simplest possible thing, which is files in a folder. Not a new app, not a database, not a proprietary format, just markdown files in a git repository.

---

What I learned from doing it is that the bottleneck in AI-assisted work isn't intelligence so much as context. We have access to models that can reason, synthesize, and generate at a level that would've looked like science fiction five years ago. But every time you open a new chat thread you're starting from zero. The model knows nothing about you, your projects, your patterns, your history, so you spend the first half of every conversation re-explaining who you are.

Chat threads are context graveyards. The best insight you ever had with an AI assistant is buried in a conversation from three weeks ago that you'll never reopen.

What if instead you maintained a structured set of files that an AI agent could read and write to? Not a chat log and not a wiki, but a living repository, a persistent and organized memory that something other than your brain can reason over.

That's what I built, and the strange thing is how natural it felt.

---

There's a long lineage behind this idea, even if I didn't know it at the time. People have been dreaming about machines that extend human memory since at least the 1940s, when an engineer proposed a hypothetical device, a desk with screens and levers, that would let a researcher follow trails of association through their personal archive of documents. The machine was never built, but the vision was prophetic. Knowledge was never really about storage so much as about the trails, the connections between things.

A couple decades later, another thinker coined the word "hypertext" and imagined a global system of interconnected documents. That vision eventually became the web, though in a much cruder form than he intended. What got lost in translation was the personal dimension, since the web became a place for publishing rather than for thinking.

Meanwhile a sociologist in the mid-20th century built one of the most productive intellectual systems in history using nothing more than index cards in a wooden box. His method was about as simple as it gets, since he'd write one idea per card, link cards to each other, and let the network grow. He didn't pre-organize by category, he let structure emerge from connection, and the box became a conversation partner he described as a system that could surprise him with its own ideas.

All of these people were circling the same insight, that cognition isn't something that happens exclusively inside your head. When you write a thought down and organize it so you can find it later, the notebook is already doing cognitive work. When the notebook can link to other notebooks, it starts to do something that looks like associative memory. And when something can read those notebooks and reason about them, now you've got externalized thought that compounds.

---

The practical version of this is simpler than it sounds.

I have a folder, and inside it there are files for different domains of my life and work. Some track my current state, like what I'm focused on and what's unresolved and what my energy level is. Some capture relationships and the evolving context around people I interact with. Some hold goals and the strategies I'm pursuing, some are raw journal entries, and some are hard-won lessons extracted from experience.

There's a single instruction file at the root that acts as a routing table. It tells the AI that if the conversation is about X, read files Y and Z first, and if it's about something else, start with A and B. The agent doesn't read everything every time, it allocates its attention based on what's relevant. None of this is complicated, it's just a map.

And the files behave less like static containers than like organisms. A note becomes a file, a file that gets too long becomes a directory, and a directory that develops its own internal logic becomes a sub-system. I don't pre-split things, I let the content prove it needs more space. Splitting too early just creates empty folders you feel obligated to fill, whereas letting it grow organically creates structure that's there for a reason.

I restructure when a file gets too large to read usefully in one pass, not when it would look cleaner split up. The system optimizes for its own ability to reason rather than for human folder aesthetics.

---

The part that surprised me came later. When you structure information so an AI can consume it well, when you decide what gets its own file and what links to what and what context is essential versus noisy, you're doing something that rhymes with machine learning. Not the version with weights and gradients and loss functions, but the version built out of context and structure and attention.

You're shaping the input space so the reasoning engine produces better outputs. You're deciding what signal to amplify and what noise to suppress, and you're building a representation of your world that's optimized for a specific kind of inference.

This is ML anyone can do. No GPU cluster or PhD required, just a folder, some markdown files, and the willingness to externalize what you know in a way that's structured enough for something else to think with.

The "training data" is your life, the "model" is whatever AI you point at the repository, and the "fine-tuning" is the ongoing act of organizing, refining, and connecting your notes so the system gets smarter over time.

---

What makes this different from a note-taking app or a personal wiki is that the output goes past retrieval into reasoning. The system doesn't just hand you back what you wrote. It connects things you didn't connect, it notices patterns across entries that span months, and it holds you accountable to things you said three weeks ago that you conveniently forgot.

And because it's just files in a git repo, you own it completely. There's no vendor lock-in and no proprietary format, and you can version control your own thinking. Run `git log` and you've got an archaeological record of how your mind evolved, what you believed in January that you revised by March, what you were worried about that turned out to be nothing, what kept showing up in your entries that you refused to look at directly.

The same architecture works across domains. I've used it for personal life, like journaling and processing emotions, and I've used it for software projects, like product strategy and institutional knowledge. The structure adapts because it isn't a template so much as a pattern, the same handful of moves around files, links, routing, and organic growth. It scales from a personal journal to a team knowledge base without changing what it fundamentally is.

---

I think we're in the early innings of something. The tools we have for thinking with AI are still built around the chat paradigm, which is ephemeral and stateless by design. But the people getting disproportionate value from AI are the ones who've figured out how to give it memory, not by waiting for the models to get better at remembering but by building the memory layer themselves.

The file system is the oldest, most universal, most portable abstraction in computing. It turns out it might also be the most natural interface between a human mind and a machine one.

What would it look like if you took your own knowledge seriously enough to structure it for something other than yourself to read?
