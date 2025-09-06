Rewriting the Recommender: What Happens When You Personalize the Description Instead of the Ranking?

I’ve used a lot of recommender systems that got it almost right — until they didn’t. One week I’m impressed by Netflix. The next, I’m wondering if it even knows me — or if I just confused it with the wrong clicks. What’s missing isn’t just relevance, but transparency. I rarely know why I’m being shown something.

So I started wondering: what if it’s not just about what I see, but how it’s described to me? Could the way an item is framed help me understand how the system sees me — and whether that framing actually fits?

This post documents what that looked like in practice: how the idea works, what architectural choices made it viable, and what I learned about evaluation, trade-offs, and the limits of “plug-and-play” GenAI layers.

1. Why this, why now 

Over the past few years, I’ve built several recommender systems, always with the same goal: make them feel more personal, and ideally give the user control — preferably over the algorithm itself. Using platforms like Amazon, Netflix, or Spotify, I often found them impressive, sometimes even uncannily accurate. But other times they felt over-optimized, as if the system had locked into a version of me that no longer fit. What I wanted, in those moments, was simple: the ability to tell the system what I really wanted, in words, the way you might explain your needs to an expert in a store.

That gap between what the system showed me and what I wished I could tell it is what led me to think differently about personalization.

Recommender systems have traditionally focused on which items to show and in what order. Rewriting how those items are described has become more feasible with the advent of large language models. This opens a new opportunity: adapting presentation alongside selection.

Presentation is broad: visuals, layout, language. Here I focus on descriptions. How an item is described directly affects whether users understand it, trust it, and act on it. A description that matches their knowledge level makes it easier to comprehend. One that reflects their values builds trust. Together, these factors shape whether they engage at all.

Of course, not every user always reads the description. In some contexts — like shopping for everyday consumer goods — visuals or price might dominate the decision. But in other domains, such as healthcare, education, or complex products, the description often carries the weight of the decision. Even in e-commerce, when users only skim, a few well-phrased lines can make the difference between skipping and clicking. Rewriting descriptions doesn’t guarantee more readers, but it increases the chance that when they do, the text speaks in a way that resonates and makes the choice clearer.

To see how rewriting plays out in practice, I built a system that rewrote film synopses by emphasizing the elements that matched the user profile. The key is that nothing new was invented — the facts of the movie remained the same, but the framing shifted. 

Original synopsis:“An introverted composer struggles to finish a symphony while caring for his ailing father.”

Personalized synopsis (user likes family themes, dislikes romance):“A quiet, character-driven story about a composer balancing creative block with the daily work of caring for his father — less about romance, more about intimate family moments.”

2. Architecture

The architecture I used is simple by design: a standard recommender retrieves candidates, and a downstream rewriting layer personalizes their descriptions. The diagram below shows how the components fit together.

Figure 1: Architecture of the LLM-Augmented Movie Recommender System

Retrieval: retrieves candidate items based on content similarity.

Rewrite gate: decides whether to pass the item into rewriting, based on profile strength or context.

LLM personalization: takes original description + user profile, rewrites by highlighting relevant elements.

Guardrails: entity pinning and sentiment clamps keep rewrites faithful.

UI: surfaces the personalized synopsis to the user.

This design is intentionally modular. The rewriting layer sits downstream of retrieval, so the recommender can use any backend — collaborative, hybrid, or content-based — while the LLM handles only the presentation surface.

Looking back, two design choices mattered more than I expected:

MVP modularity. Because the LLM layer was bolted on downstream, the recommender itself remained intact. That meant I could prototype quickly and, if needed, rip the rewriting layer out without breaking anything.

Evaluation clarity. By keeping retrieval “clean” and pushing personalization into its own layer, it became easier to isolate what the LLM was actually doing. I could measure hallucinations and positivity drift without worrying that retrieval noise was the cause.

The point wasn’t to engineer a perfect system. It was to build the simplest testbed where rewriting could be tried in isolation, and where lessons about personalization and faithfulness would be visible.

3. Evaluation

Once the system was working, the real question was: how do you evaluate a personalization layer that rewrites text? Traditional recommender metrics like precision@k don’t say much here, because the ranking is untouched. What mattered instead was whether the rewrites stayed faithful, and how their tone shifted.

Metrics

Faithfulness / hallucination proxies: Started with BERTScore against the original synopsis and a global entailment check, then expanded to sentence-level entailment and QA-consistency. From this I defined a hallucination rate — the proportion of details in the rewrite not present in the source. Manual spot checks were still needed.

Positivity drift: Sentiment delta between rewrite and source, measured with VADER (what I called the Positivity Drift Index, PDI).

Ranking metrics: Recorded but secondary — they weren’t the focus.

Lessons

Thin inputs trigger knowledge fallback. When the source synopsis was sparse, the LLM often drew from its own knowledge base. Automated metrics flagged this as hallucination, but human inspection showed some cases were plausible elaborations.

Positivity bias is systematic. Rewrites were consistently more upbeat than the source (+0.29 sentiment shift on average), even when the facts were intact.

Isolating the LLM layer made sense for the experiment: it exposed the model’s intrinsic tendencies and showed how a simple “plug-in” setup behaves in practice. That same setup is tempting for businesses, because it cuts engineering cost and allows for fast MVPs without touching the rest of the stack.

The evaluation revealed the limits. Current metrics don’t capture nuance, and human inspection was necessary — which re-introduces cost. Proper integration could solve part of this by adding richer signals, but it also multiplies the variables that must be tuned.

The conditional takeaway is that a downstream layer can still be useful, provided two conditions are met: the upstream data is strong, and the company accepts the intrinsic instability of LLMs. In those cases, such a layer is enough for many applications — and, crucially, it allows teams to measure ROI quickly before committing to deeper integration.

4. Where this applies

While I tested the idea on movie synopses, the same approach applies across domains where users rely on text to make decisions.

E-commerceProduct descriptions are often too generic to support meaningful personalization. Rewriting can highlight different aspects like sustainability or fit depending on the user.

EducationCourse catalogs tend to be vague or overly formal. Rewriting allows emphasis on projects or theory depending on the learner’s goals.

HealthcareMedical texts often require simplification for non-expert readers. Rewriting can adjust terminology and tone depending on audience.

JobsThe same role can be described differently depending on experience level. Rewriting helps align expectations without altering the role itself.

In each case, the goal isn’t to change the item — but to surface the angle that makes it most relevant to the person reading it.

5. Before you build a rewriting layer

Is your source content rich enough to support grounded rewrites?

Do you accept some tone drift in exchange for better engagement?

Can you afford human-in-the-loop evaluation at MVP stage?

Are you using this to test ROI before deeper integration — or as a long-term personalization layer?

If there’s one thing I’d do differently next time, it’s this: I’d think less about what the model can generate, and more about what the user needs to hear. Rewriting is powerful — but only if the framing earns trust. That’s what makes this layer worth designing well.