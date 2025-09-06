1.​ Introduction
Artificial Intelligence (AI) has evolved from hidden backend code, accessible only by its
creators, into a frontline interface for millions thanks to the rise of Large Language Models
(LLMs). The way content is presented, not merely what is being recommended, but how it is
framed linguistically, shaping user trust, satisfaction and engagement. This transformation
sheds light on a new imperative in Human-Computer Interaction (HCI): the emotional,
cognitive, and interpretive layers of system output are now as important as their factual
correctness or functional relevance.
Nowhere is the shift more discernible than in recommender systems. Originally designed to
optimize predictive accuracy and match rate –“what should I show you next?”– they have
become brokers for experience and meaning. As users interact with massive content libraries
across domains like e-commerce, entertainment, education and healthcare, their experience is
shaped by the utility as well as how engaging, trustworthy, and contextually sensitive the
recommendation feels. In other words, the recommender has become a storyteller and a
curator in the user’s decision-making process.
At the same time, the field of LLMs has experienced rapid development both in technological
capability and in popularity. Models like GPT-4. LLaMA, and T5 have demonstrated
capabilities not just in generating coherent language but in adapting tone, style, emotional
framing, and semantic nuance with remarkable versatility. These developments suggest a new
frontier: leveraging LLMs as generative tools that can be used to rewrite content descriptions
and personalize the linguistic framing of recommended items. Instead of static item
descriptions, systems can now deliver personalized narratives that highlight the aspects of
greatest user interest. This is not a cosmetic upgrade. The way information is framed can
deeply influence the outcome of the user journey. Cognitive science and HCI researchHuman-Machine Interaction in AI-Applications: Approaches to Intelligent and Context-Aware Systems –
9
repeatedly show that users interpret system intent, competence, and alignment based on subtle
cues embedded in language. The likelihood of a system being trusted increases when it adopts
the user's preferred mode of expression.
Yet, integrating LLMs into the processes of recommender systems presents significant
challenges. Among them are (1) ensuring factual consistency (avoiding hallucination), (2)
preventing positivity bias (i.e., over-optimistic “sycophantic” outputs that mislead users, and
(3) maintaining alignment with user-specific preferences without destabilizing the system’s
core recommendation accuracy. These challenges are not trivial. LLMs, despite their
brilliance, maintain their nature as random and bias-vulnerable constructs. Unchecked, they
could undermine the reliability and fairness of recommendation ecosystems.
This thesis emerges from the intersection of two developmental paths: the need for richer,
aligned content presentation in recommender systems, and the technical opportunity (and
challenge) of leveraging LLMs to meet that need. The research explores whether LLMs can
be integrated into a recommender pipeline to rewrite item descriptions according to user
preferences while preserving factual accuracy, minimizing bias, and enhancing user
experience. By framing recommendation textual outputs as adaptive, dialogue artifacts rather
than static metadata, this work aims to push recommender systems to become more
emotionally intelligent and context-aware interfaces.
Research Gap
While numerous studies have explored user modeling, recommendation accuracy, and even
explanation generation in LLM enhanced recommender systems, a critical research gap
persists in the specific domain of personalizing the linguistic framing of recommended items
themselves – dynamically rewriting descriptions to align with users’ stylistic, tonal, and
thematic preferences.
Furthermore, even when LLMs are used in recommender contexts, challenges such as factual
consistency (avoiding hallucination) and bias control (e.g. preventing positivity bias) are often
overlooked or insufficiently addressed. No existing work systematically integrates a
personalization
layer that
rewrites recommendation outputs
safeguarding truthfulness and minimizing sycophancy.
while
simultaneouslyHuman-Machine Interaction in AI-Applications: Approaches to Intelligent and Context-Aware Systems –
10
Research Question
Building on this framing, and selecting movies as the domain due to their abundant metadata,
rich textual context, and public availability of sentiment-labeled reviews, we now formalize
the central question guiding this thesis:
“Can LLMs be integrated into movie recommender systems to rewrite item descriptions in a
tone and style aligned with individual user preferences, while preserving factual accuracy and
minimizing positivity bias, as evaluated post hoc?”​
Goals
G1: Users will rate LLM‐personalized synopses as well‐aligned with their stated
preferences in tone, genre, and style.
G2: Personalized synopses will maintain core factual elements of the original descriptions.
G3: Personalized synopses will avoid introducing unintended positivity bias.
Thesis Structure
The remainder of this thesis is structured as follows: Chapter 2 presents a comprehensive
literature review, covering foundations in human-computer interaction, recommender system
techniques, and the recent rise of LLM integration. Chapter 3 outlines the methodology,
detailing the system architecture, data preprocessing, feature engineering, and the design of
the personalization layer. Chapter 4 reports the results of both quantitative and qualitative
evaluations, assessing the alignment, factuality, and bias characteristics of personalized
outputs. Chapter 5 discusses the implications of these findings, situating them within the
broader field of AI-driven recommendation and human-centered system design. Finally,
Chapter 6 concludes with a summary of contributions, limitations, and suggestions for future
research directions.Human-Machine Interaction in AI-Applications: Approaches to Intelligent and Context-Aware Systems –
11
2.​ Literature Review
To ground this investigation, the following chapter surveys the existing body of research
across three major domains: HCI theories relevant to system presentation and user trust;
foundational and modern approaches to recommender systems; and the integration of LLMs
into recommendation pipelines. This review establishes the theoretical and technical context
necessary to situate the present work, highlighting both the strengths and critical gaps of prior
efforts. Particular attention is given to how personalization, explanation, factuality, and bias
have been conceptualized and operationalized in the literature, thus providing a foundation for
the methodology and evaluation strategies employed in this study.
2.1.​ Human-Computer Interaction in Intelligent Systems
As AI systems increasingly mediate content and interaction, HCI research has evolved to
encompass not only interface usability but also the emotional, cognitive, and interpretive
dimensions of system output. This is especially relevant in systems where natural language
becomes the primary mode of interaction. Contemporary HCI explores how linguistic
framing, tone, and presentation shape the user’s perception of system intent, trustworthiness,
and alignment.
Studies on how humans judge machines suggest that users tend to evaluate machine outputs
asymmetrically compared to human decisions, especially in cases of failure or bias [1, p. 6].
In parallel, research on conversational systems highlights the importance of social presence,
adaptability, and user alignment through language [2], [3]. These findings emphasize that
presentation of content carries significant weight in user interaction.
Tacit and content-rich knowledge representation is another concern in HCI, particularly in
systems attempting to adapt to individual preferences or emotional cues rather than relying
solely on implicit user behavior. Some systems explore direct communication of preferences
as a means of co-creation where both the user and the system are engaged [4], [5] . ThisHuman-Machine Interaction in AI-Applications: Approaches to Intelligent and Context-Aware Systems –
12
reflects a shift from information retrieval to participatory interaction, where the user shapes
not only the selection of content but also how it is communicated.
Framing effects and emotional design further contribute to the interpretive dimensions of
HCI. Research on semiotic and narrative design in interface systems [6], [7]. suggests that the
tone and framing of a response can carry emotional and cognitive signals that influence user
interpretation beyond factual content. Especially in domains involving cultural or narrative
material, such as movie or literature, the way information is presented plays a central role in
user experience. These perspectives reframe system output not as passive data but as an
interactional artifact embedded in social and emotional context.
2.2.​ Recommender Systems as Context-Aware Interfaces
The emergence of recommender systems coincided with the increasing importance of finding
solutions to sort through the growing amounts of information available. The challenge was
not to only find ways to understand the data at hand, but also to know how to manipulate it,
scale it and present it. Recommender systems help users make decisions, whether as
customers of the service or as providers. They provide recommendations by estimating a
utility function over a large user and item sets to make the right prediction.
A utility function is present across economics, psychology, and decision theory. In essence, it
is a way to represent how much someone values different options or outcomes. It assigns
numbers to things based on the satisfaction or the usefulness they offer a person. These
numbers are assimilated as a rating where known and unknown entries must be predicted to
rank items per user [8].
Recommender systems are an essential component of various digital platforms across
domains such as e-commerce, entertainment, healthcare, education and energy management.
In e-commerce, they stimulate sales by personalizing product presentation (e.g. movie
synopsis) and suggestion based on user preferences and browsing history, aiding the user in
finding the right product. Entertainment companies like Netflix and Spotify [9, p. 366], [10],
enable content discovery, as both services offer tens of thousands of items; the users are able
to navigate to content they may enjoy and easily discover new content based on their profiles.
Another domain example is the application of recommender systems in healthcare, where the
system is used to aid practitioners in treatment suggestions, optimizing operational proceduresHuman-Machine Interaction in AI-Applications: Approaches to Intelligent and Context-Aware Systems –
13
and personalizing medication plans [11]. While in educational settings, these systems
facilitate adaptive learning by offering individualized learning paths and resources, improving
knowledge and skill acquisition [12].
2.2.1.​
Traditional Recommender System Techniques
The foundational recommender system filters are classified along two orthogonal dimensions
(Table 1):
​
Table 1: Classification of Recommender System Techniques by Filtering Type and Modeling Approach
The content-based approach recommends items to users by analyzing the features of the items
previously favored or interacted with. It assumes that users will continue to engage with items
similar to those they enjoyed in the past. The system builds user profiles based on item
attributes (e.g. genre, keywords) and matches these with the attributes of new items to suggest
similar content. On the other hand, collaborative filtering relies on the similarity between
items or between users rather than item attributes. For example, if two users have matching
profiles, an item liked by one user will be recommended to the other. It assumes that users
who have similar profiles will continue to have similar tastes and make similar choices. The
third method to filter is to combine both methods into a hybrid solution. A hybrid
recommender system combines multiple recommendation techniques to harness strengths
while mitigating limitations such as the cold-start problem and data sparsity. [13]Human-Machine Interaction in AI-Applications: Approaches to Intelligent and Context-Aware Systems –
2.2.2.​
14
Modern Recommender System Techniques
Having established the foundational techniques of content-based, collaborative, and hybrid
recommender systems, it becomes imperative to discover their limitations and the techniques
that have emerged since and which offer up-to-date approaches to the growing complexities
of user behavior, data variety, and application scale.
Emerging techniques reflect the journey from simple, rule-based models to sophisticated,
AI-driven systems that personalize user experience at scale. In 2006 the Netflix Prize was
launched
[14], which catalyzed research and guided the field toward model-based
collaborative filtering and context-aware systems, integrating external parameters like time
and location. Later and with the growing popularity of deep learning based models,
recommender systems made another leap as they integrated methods like neural collaborative
filtering, which enabled modeling nonlinear user-item relationships. This means that systems
can now go beyond “does A match B?” and learn “does A and B together mean something
special?” [15]. More recently, the field has moved into the era of Generative AI, where LLMs
and multimodal learning have further enhanced recommendation quality by understanding
context, intent, and even emotional tone in user behavior. This has unveiled new prospects for
explainable recommendations, and human-centric architecture [16], [17].
2.2.3.​
Recommender Systems as Interfaces
While there is a lot of emphasis on exploring and optimizing algorithms that can achieve the
best ranking accuracy, analyzing recommender systems in their role as user interfaces is of
equal importance. The importance and impact of designing with user interaction in mind are
discussed in [18] and are presented as four main key findings:
-​ Traditional recommender systems overly emphasize algorithm accuracy while
neglecting the broader user experience.
-​ Adaptive, conversational, and interactive interfaces significantly enhance user
engagement by allowing multi-turn dialogue, personalized feedback, and dynamic
adaptation to user preferences.Human-Machine Interaction in AI-Applications: Approaches to Intelligent and Context-Aware Systems –
15
-​ Psychological factors, including user emotions, personality, cognitive biases, and
learning styles, play an increasingly important role in shaping effective and persuasive
recommendation systems.
-​ Explainability and transparency are key elements that increase user trust, system
acceptance, and facilitate informed decision-making processes.
The growing awareness around these factors is shifting the focus on facilitating the
technology that empowers the user in their discovery. As mentioned above [18], explaining to
the user why an item was recommended is a step in the right direction and future studies
should expand research into adaptive and personalized explanations that help users
understand the underlying logic and decision-making processes.
Just like deliberate graphical design that keeps the user’s needs in mind to gain trust, system
design that is transparent is equally critical to establishing a trustworthy system-user
relationship. In [19], LLMs are used to explain recommendations and it shows that
LLM-generated explanations
significantly
improve
perceived
trustworthiness
of
recommender systems compared to standard or template-based explanations. In the user study
results, trust was one of the metrics where LLM explanations received consistently higher
scores. This is then grounded in the users’ claim feeling that the system “understood them
better”, provided meaningful reasoning, and adapted explanations to match their mental
models [19].
On an extended note, making recommender systems more transparent and aware of the user
and their preferences is essential to advancing these systems implicated by the increased user
satisfaction, which also requires a good understanding of recommender system technologies
such as context-aware and knowledge graph based. Contextual features as discussed before
have been shown to significantly improve recommendation accuracy, while knowledge‐graph
embeddings enrich item representations with structured domain knowledge for more
explainable suggestions. Both techniques are essential in offering a better user-item
representation.Human-Machine Interaction in AI-Applications: Approaches to Intelligent and Context-Aware Systems –
2.3.​
16
LLMs in Recommendation: Surveys, Architecture, and Integration
LLMs have recently emerged as a transformative force in recommendation systems, bringing
with them the capacity for nuanced language understanding, zero-shot generalization, and
dynamic user interaction. As noted by Vats et al. (2024), LLMs enable a paradigm shift by
reframing recommendation tasks as language generation problems, bypassing the need for
traditional interaction embeddings and instead relying on prompt-based contextual modeling.
This foundational shift unlocks new opportunities in personalization, explainability, and
adaptive dialogue – but also introduces challenges related to prompt sensitivity,
hallucinations, and consistency. The following sections explore how this dual-edged
capability has been applied in the context of content generation, stylistic control, and
grounding in recommender systems.
2.3.1.​
Rise of LLMs in Recommender Systems
When modeling item and/or user side information, recommender systems also make use of
textual information (e.g. item names, item descriptions, user profiles, and user reviews of the
items); this, along many other aspects, has given LLMs an opportunity to integrate into
recommender systems. Recent surveys [20], [21], [22] highlight the emergence of LLMs as a
transformative
force
in
recommender
systems,
enabling
more
expressive,
natural-language-based user interactions and reshaping personalization pipelines through
pre-training, fine-tuning, and prompt-based techniques.
In light of the significant advances of representation learning, Deep-, Recurrent-, and
Graph-Neural Networks have also become a part of modern recommender systems. At their
core these architectures enable systems to automatically learn rich, high-dimensional
embeddings of users, items, and interactions, effectively capturing complex patterns and
relationships in diverse data modalities. Despite these remarkable advancements, many
modern recommender systems still face key limitations. DNN based models like CNNs and
LSTMs struggle to effectively understand natural language, limiting their ability to capture
rich user and item information. Most models are narrowly designed for specific tasks and lack
generalization to new recommendation scenarios. Additionally, while they perform well on
straightforward tasks like rating prediction, they fall short in handling complex multistep
reasoning tasks such as personalized trip planning that require sequential contextual decision
making.Human-Machine Interaction in AI-Applications: Approaches to Intelligent and Context-Aware Systems –
17
LLMs on the other hand, have shown their unique advantage over the aforementioned deep
learning approaches, as they excel at understanding complex and nuanced textual input [21].
This makes them more capable of generalizing more effectively to unseen tasks through
in-context learning and instruction-following. In terms of reasoning, e.g. the itinerary
recommendation, LLMs support multi-step logic and decision-making, as demonstrated in
table 2.
This shift is presented in [20] as not merely a technical advancement but a paradigm shift,
where recommender systems evolve from static, domain-bound algorithms into dynamic,
conversational, and human-aligned systems powered by LLMs​. The paper goes on to explore
the How and When of LLM integration providing examples of state-of-the-art approaches to
implementing LLMs in recommender systems. From feature engineering, feature encoding to
LLMs as a scoring/ranking function and as an alternative form of capturing user interaction.
The paper makes a case that language models can be used to augment user- and item-level
features, as well as generating instance-level samples. In the former, instead of just tweaking
features, this approach generates full examples, like realistic user data or sample queries,
which help fill gaps in the data and protect user privacy. Some studies even simulate
conversations between users and the system using LLMs to make recommendations more
realistic. Additionally, LLMs are used to rewrite user queries in a clearer or more relevant
way, especially for rare or unusual search terms, often by imagining different user types to
improve understanding. While in instance-level sample generation, some models use LLMs to
generate summaries of a user’s preferences or facts about items. Others use LLMs to highlight
specific themes or aspects of user behavior for more detailed understanding. Additional
approaches use LLMs to improve data quality by rewriting text, filling in missing knowledge,
generating item attributes, or modeling user interests more clearly.
User interaction, on the other hand, has been limited to a one-time response based on past
behaviors like clicks or purchases, which restricts the system’s ability to fully understand a
user’s current needs, especially in complex situations e.g. where context is also a factor. [20]
explores interactions by categorizing them into two main types according to how LLMs can
help make recommender systems more user-friendly and interactive: task-oriented and
open-ended. In task-oriented, the user has a goal and the system supports their
decision-making through e.g. dialogue. This approach assumes that the user has a clear set
goal when interacting with the recommender system. Conversely, open-ended user interactionHuman-Machine Interaction in AI-Applications: Approaches to Intelligent and Context-Aware Systems –
18
acts as a guide on the user’s journey to help them (through chitchat, QA, etc.) get to the
decision-making stage.Human-Machine Interaction in AI-Applications: Approaches to Intelligent and Context-Aware Systems –
Table 2: Comparative Advantages of LLMs Over Traditional Deep Learning in Recommender Systems
19Human-Machine Interaction in AI-Applications: Approaches to Intelligent and Context-Aware Systems –
2.3.2.​
20
Training and Adaptation Strategies
LLMs are typically integrated into recommender systems not in their raw, pre-trained
form, but through various adaptation techniques that align their general-purpose language
capabilities with the specific needs of recommendation tasks. The three most prominent
strategies – pre-training, fine-tuning (especially multi-task fine-tuning), and prompting –
serve as foundational tools across all major integration patterns. This section outlines
these strategies and clarifies how they function within the broader architecture of
LLM-enhanced recommendation systems.
2.3.2.1.​
Pre-training
LLMs such as BERT, GPT-3.5, and LLaMA are initially trained on massive corpora of
general text using self-supervised objectives like Masked Language Modeling (MLM) or
Next Token Prediction. This pre-training stage enables the model to encode rich syntactic,
semantic, and factual knowledge. Although not recommender system-specific, these
pretrained models serve as the backbone for downstream recommendation systems,
offering a powerful starting point from which task-specific capabilities can be developed.
In most LLM-Recommender-System pipelines, the model's pretraining remains fixed
unless further fine-tuned.
2.3.2.2.​
Fine-tuning
Fine-tuning refers to updating the parameters of a pre-trained LLM using supervised
learning on recommendation-specific data. In the context of multi-task learning, the
model is trained on multiple related tasks simultaneously, for example, genre
classification, item prediction, and user-item matching, allowing it to internalize
recommendation logic while preserving its linguistic strengths. This strategy is often used
to infuse collaborative signals, content-based features, or domain-specific semantics into
the LLM. Multi-task fine-tuning can produce a model that is both semantically rich and
functionally aligned with recommender system requirements, and is especially valuable in
cold-start and cross-domain scenarios.Human-Machine Interaction in AI-Applications: Approaches to Intelligent and Context-Aware Systems –
2.3.2.3.​
21
Prompting and Instruction Tuning
Prompting offers a lightweight, often parameter-efficient alternative to full fine-tuning.
Instead of modifying the LLM’s weights, prompting steers its behavior through carefully
crafted input templates. These can range from zero-shot prompts (e.g., "Recommend a
movie like Inception") to few-shot in-context examples, or more structured forms like
instruction tuning. Instruction tuning extends this idea by training the LLM on a set of
diverse recommendation tasks, each paired with a natural language instruction. This
approach boosts generalization and allows the model to follow user intentions more
robustly. While prompting typically lacks the depth of representation learned through
fine-tuning, it is more adaptable, scalable, and cost-efficient for rapid prototyping and
domain adaptation. Together, these three strategies form the adaptation toolkit that
underpins nearly all state-of-the-art architectures integrating LLMs into recommender
systems.
2.3.3.​
Integration Patterns and Technical Pipelines
These integration strategies reflect the diverse and still-evolving ways in which LLMs are
operationalized within recommender systems. While their architectures vary, they share a
common goal: to embed language-based reasoning into the recommendation process.
Figure 1 provides a schematic overview of key integration motifs, which are examined in
detail in the following subsections.Human-Machine Interaction in AI-Applications: Approaches to Intelligent and Context-Aware Systems –
22
Figure 1: Common Integration Patterns for LLMs in Recommender Systems
2.3.3.1.​
LLMs as Semantic Representation Generators
In this architecture [16], [21], [23], LLMs are not used to generate recommendations
directly, but to convert raw textual data into structured, semantically rich representations
that are then turned into embeddings using models like MacBERT. These embeddings
capture user preferences or item attributes (e.g genre, style, sentiment) and extract via
carefully structured prompts relevant features. These features are then transformed into
high-dimensional embeddings and supplied as inputs to downstream recommender
models. This modular design enables LLMs to augment traditional systems without
disrupting the core recommendation logic.
Furthermore, [23] shows that this integration pattern is especially effective in few-shot
and cold-start scenarios where user-item interaction data is limited. Architecturally, the
approach is modular in structure and model-agnostic: LLMs are plugged into the feature
pipeline rather than the prediction head. However, the process is subject to
unpredictability in generative output as it is heavily dependent on prompt design, which
can elude the reproducibility and embedding stability.
2.3.3.2.​
LLMs as Interactive Interfaces in Conversational Recommendation
Here LLMs are integrated into the recommender system as natural-language-driven
agents. Instead of operating at the representation or prediction layer, the LLM acts as theHuman-Machine Interaction in AI-Applications: Approaches to Intelligent and Context-Aware Systems –
23
dialogue controller by eliciting preferences, interpreting vague or inquisitorial queries,
and offering personalized item suggestions. In [24], the LLM can either complement a
recommender system by acting as intermediary that parses user-side information and
invokes backend ranking/retrieval modules, or by generating recommendations directly.
Architecturally, the LLM operates as a front-end layer that processes conversations,
interprets user goals, and outputs well-informed, contextual responses. As the name
suggests, this setup is well-suited for conversational recommender systems, where user
profiling evolves through ongoing interaction.
Figure 2: Example of LLM-Driven Dialogic Recommendation and Candidate Generation
Despite their flexibility, these systems face key challenges such as their lack of long-term
memory and state tracking, which can lead to inconsistencies or forgotten preferences in
multi-turn dialogues. Additionally, they are prone to hallucinating non-existent items
when not grounded in external knowledge bases or candidate sets. Their inability to
efficiently handle large-scale item corpora without retrieval augmentation further limits
scalability, and their outputs are non-deterministic, which challenges reproducibility and
system debugging. Nevertheless, this integration pattern highlights the evolving role of
LLMs as not just passive processors but interactive reasoning modules within modern
recommender pipelines. Rather than embedding content or acting as the prediction head,
they are leveraged for eliciting preferences, maintaining dialogue context, and generating
or steering recommendations in natural language. Architecturally, this shifts the locus ofHuman-Machine Interaction in AI-Applications: Approaches to Intelligent and Context-Aware Systems –
24
control toward prompt-based orchestration, where the LLM becomes a “recommender
interface” rather than the recommender itself. [16], [22], [24]
2.3.3.3.​
Probing and Knowledge Extraction from Pretrained LLMs
Within this paradigm, LLMs are explored for their inherent pretrained knowledge bases,
rather than components within a deployable recommender system. This approach
examines what an LLM like BERT “knows” about user-item relationships, item attributes,
and domain-specific semantics. In other words, the LLM is treated as a recommender
system in its own means. For instance, in the study [24], BERT was probed using masked
language prompts (e.g., “The Godfather is a [MASK] movie”) to determine if it could
predict item genres, and through next-sentence prediction tasks to assess whether it could
capture item co-occurrence trends typical in collaborative filtering.
The findings reveal that BERT as an LLM exhibits strong performance on content-based
knowledge, such as associating movies with their genres or matching reviews to their
correct titles. However, it struggles with collaborative signals and ranking consistency,
particularly when exposed to adversarial or complex multi-turn inputs. These results
indicate that while LLMs possess a deep semantic understanding of individual items, they
lack the sequential, personalized modeling that traditional recommender systems require.
Architecturally, this pattern does not involve integrating LLMs into a pipeline but instead
informs downstream integration decisions. By probing pretrained models before use,
system designers can determine whether a model contains useful domain knowledge, and
where further fine-tuning or augmentation might be necessary to meet the demands of
interactive, personalized recommendation tasks.
2.3.3.4.​
Multi-Task Learning and Knowledge Infusion
This pattern enhances LLMs for recommendation by training them on several tasks at
once, allowing the model to learn a broader, more nuanced understanding of both user
preferences and item characteristics [22]. In this setup, a pre-trained LLM (like BERT or
T5) is fine-tuned not just on user-item interactions, but also on related tasks such as genre
classification, tag prediction, or review summarization. For example, the model might
simultaneously learn to predict whether a user would like a movie, classify its genre, and
summarize its plot. Through this combined training, the model develops internalHuman-Machine Interaction in AI-Applications: Approaches to Intelligent and Context-Aware Systems –
25
representations that capture both the language of recommendations and the behavior
patterns behind them.
This approach helps bridge the gap between general-purpose language understanding and
the specific logic of recommender systems. It allows the LLM to become more aware of
recommendation semantics without needing to be retrained from scratch. When used as
part of a recommendation pipeline, the resulting model can either serve as a powerful
feature encoder or as the core component making predictions. While the setup is more
complex, requiring carefully balanced tasks and more computation, it offers improved
generalization, especially in data-scarce scenarios. Overall, this pattern enables LLMs to
better “think like a recommender,” making their outputs more aligned with both content
and collaborative signals. [16], [21]
2.3.3.5.​
Additional Integration Architectures and Emerging Directions
While the preceding sections have synthesized four core architectural patterns for
integrating LLMs (LLMs) into recommender systems, recent literature reveals several
emerging or specialized approaches that complement but do not fundamentally redefine
this taxonomy. These integration forms are often task-specific or system-level innovations
that enhance recommendation quality, explainability, or adaptability. This section briefly
outlines such architectures to provide a more comprehensive picture of this evolving
landscape.
One emerging pattern is Retrieval-Augmented Generation (RAG), in which the LLM is
paired with an external retriever to access relevant item or user context during
recommendation generation. Unlike fully generative setups, RAG architectures enable
dynamic grounding through retrieved content, helping reduce hallucinations and improve
factual relevance. In recommender systems, this often manifests in two stages: first
retrieving a candidate set via a dense or sparse retriever, then prompting the LLM to
rerank or summarize based on that set. This approach is particularly effective in
conversational or zero-shot scenarios, where grounding improves both accuracy and
explainability.
Another integration form involves using LLMs as upstream input generators. Instead of
being part of the recommendation logic, the LLM generates enriched representations orHuman-Machine Interaction in AI-Applications: Approaches to Intelligent and Context-Aware Systems –
26
query reformulations that are passed to traditional models like BERT4Rec or hybrid
retrieval architectures. This is common in narrative-driven or context-aware systems,
where LLMs are used to transform user interaction history into more semantically
meaningful inputs. Though not a core architectural module, this technique plays a critical
role in enhancing data quality and personalization.
Finally, some architectures incorporate multimodal content like text, images, and
sometimes audio, into LLM-enhanced recommendations. These systems typically use
multimodal encoders to extract embeddings from diverse inputs, which are then processed
by or aligned with LLMs for content generation or reasoning. Though currently limited in
scope and data availability, this direction holds promise for next-generation recommender
systems in domains like fashion, media, and social platforms.Human-Machine Interaction in AI-Applications: Approaches to Intelligent and Context-Aware Systems –
Table 3: Typology of LLM Integration Roles in Recommender Systems
27Human-Machine Interaction in AI-Applications: Approaches to Intelligent and Context-Aware Systems –
2.3.4.​
28
Open Challenges in LLMs
While the discussed LLM technologies show a promising shift in the development of
recommender systems, they are, as with any endeavor, not without major challenges and
opportunities to overcome them. One of the most frequently cited challenges is the
phenomenon of hallucination, where LLMs produce fluent yet factually incorrect or
unverifiable content. This is especially critical when LLMs are used to produce
explanations, make direct recommendations, or are entrusted with vital information, such
as in medical or legal use cases. Recent studies highlight that even prompting strategies
designed to constrain outputs cannot fully eliminate this risk. To confront this challenge,
some works have proposed RAG pipelines to ground the model’s outputs in retrieved
user-item data, however these techniques are snot yet standardized across evaluation
settings. [16], [21]
Another concern is bias, LLMs are susceptible to both systematic bias inherited from the
pre-training data and domain-specific biases like position bias and popularity bias. For
example, the order in which candidate items are presented influences the outcome in
LLMs as the STELLA framework in [25] has demonstrated. Furthermore, other recent
surveys warn of LLMs exacerbating filter bubbles or underrepresented content, especially
when explanations are personalized using unbalanced corpora. Despite post-hoc
correction techniques and fairness-aware reranking, bias mitigation remains an open
challenge, particularly in multilingual and cross-cultural settings.
Evaluation presents another significant challenge. While traditional recommender
systems offer a handful of toolkits for evaluation, most of the metrics such as
Precision@K and hit rate often fail to capture the quality of natural language outputs, the
reasoning stability, or the perceived value of conversational interactions of LLMs. Several
recent works emphasize the need for multi-dimensional evaluation frameworks, like
human-in-the-loop testing and explanation fidelity [16], [26]. Defining evaluation
standards is important, as without these standards the field risks over-reliance on
anecdotal or dataset-specific results, reducing the validity of cross-model comparison.Human-Machine Interaction in AI-Applications: Approaches to Intelligent and Context-Aware Systems –
29
Finally, the computational cost of deploying LLMs in recommendation pipelines remains
a significant barrier. Full-model fine-tuning and inference impose resource demands that
are often incompatible with scalability requirements of real-time recommendation
scenarios. Recent work has explored solutions like parameter-efficient fine-tuning and
modular architectures that isolate the LLM to specific subtasks, such as reranking or
explanation. Nevertheless, balancing model quality with deployment efficiency remains a
central engineering and research challenge.
2.4.​ Evaluation of LLM and Recommender Outputs
Traditional recommender systems rely on metrics like Precision@k and NDCG, but the
integration of LLMs demands new evaluation strategies. LLMs generate language-rich
content, such as personalized synopses, that must be judged on factuality, style, emotion,
and trust.
This chapter highlights how traditional evaluation falls short for LLM-enhanced
recommenders, focusing on issues like hallucination and positivity bias. It sets the stage
for understanding why richer, human-centered evaluation methods are essential for
next-generation recommendation systems.
2.4.1.​
Limitations of Traditional Metrics
Recommender
systems
have
throughout
their
evolution
relied
mostly
on
performance-oriented metrics. Metrics that are grounded in information retrieval, such as
Recall@L, Precision, NDCG (Normalized Discounted Cumulative Gain), and ranking
loss, have served as standardized benchmarks for decades. Particularly in offline
experiments on static datasets like MovieLens or Amazon product Corpora. While
effective in measuring e.g. retrieval accuracy of candidate items given known user
preferences, such metrics fall short in capturing the versatile capacities and failure points
of LLMs when used to support recommender systems.
This misalignment has been the topic of discussion in several recent empirical studies.
For instance, [27] benchmarked several LLMs, including ChatGPT and ChatGLM, across
five canonical recommendation tasks – rating prediction, sequential recommendation,
direct recommendation, explanation generation, and review summarization. TheirHuman-Machine Interaction in AI-Applications: Approaches to Intelligent and Context-Aware Systems –
30
findings reveal that while LLMs performed modestly in accuracy-based tasks, their
outputs were more compelling in tasks requiring generative fluency and semantic
coherence. However, current metrics such as BLEU and ROUGE inadequately capture
the subjective quality of these outputs, particularly in tasks involving natural language
explanations and summarizations [28].
Unchecked positivity bias can lead to adverse outcomes:
-​ Popularity bias reinforcement: Over-recommending widely known items at the
expense of niche or emergent content.
-​ Loss of critical engagement: Recommenders that fail to surface negative reviews
or critiques may hinder user informed decision-making.
Furthermore, this disconnect was found to be more pronounced in CRSs (Conversational
Recommender Systems) in [29]. The authors here argue that in such systems where
interacting with the model takes multiple turns, traditional ground-truth evaluation labels
tend to overemphasize surface-level match accuracy while ignoring the adaptive nature of
the task. Another aspect is the efficiency of retrieval-based evaluations when applied to
pre-trained LLMs like BERT. In their probing experiment [24], BERT demonstrated
competence in ranking items when the data was limited with a small candidate set, but the
performance degraded remarkably under larger candidate pools. This suggests that some
evaluation metrics may overstate model robustness by falling to account for data
distribution shifts.
Taken together, these studies reveal that the conventional accuracy-focused evaluation
paradigm is ill-suited for assessing LLM-based recommenders. As such, this highlights
the growing need for evaluation frameworks that reflect the nature of LLM outputs,
suggesting a necessary shift away from the retrieval-centric methodologies that dominate
traditional recommender system research.
2.4.2.​
LLM Hallucinations and Factuality
In recommender systems hallucinations pose a sometimes hard to detect error: they can
manifest not only as incorrect item recommendation (e.g. recommend non-existent items),
but also as false meta-data, misleading explanations/rationales, or fabricated user-itemHuman-Machine Interaction in AI-Applications: Approaches to Intelligent and Context-Aware Systems –
31
associations. This is especially documented in integrations where the LLM acts as
generative, where the line between retrieval and creation is blurred. This makes factuality
a first-order concern in both system evaluation and user trust.
Recent efforts to formalize this challenge, LLMs like (GPT-3, GPT-3.5, GPt-4,
FLANT-T5) were benchmarked in [27] on a variety of well structured prompt-based tests
designed to induce and measure hallucination behavior. Their findings show that even
state-of-the-art models, such as GPT-4, frequently generate confident but fabricated
information, especially in open-ended or low-context settings. Importantly, these
hallucinations are hard to detect as they are semantically plausible.
Beyond detection, evaluation methodologies for factual consistency have also evolved. A
set of inference-based and QA-style (where LLMs answer questions and the text
similarity between LLM answers and the ground-truth answers are computed) automatic
metrics have been developed to test whether a generated recommendation or explanation
is true to the source data. In [30] the authors argue that metrics like BLEU and ROGUE
are insufficient, instead, newer tools such as SummaC, QAFactEval, SRLScore, and
entailment classifiers based on natural language inference (NLI) models offer more
intentional diagnostics. These tools test whether a generated text logically follows from a
reference context/corpus.
The evaluation of hallucinations is further complicated by subjectivity and contextual
ambiguity. Hallucinations cannot be strictly defined as a deviation from a single “correct”
answer, but rather as a failure to remain coherent, grounded, and informative relative to
the input context and external knowledge base. This has led to considering a hybrid
approach that combines automatic factuality checks with human annotation, particularly
in high-stakes domains. [27], [29], [30]
In summary, hallucinations pose a unique evaluation challenge, requiring more than an
examination of surface-level lexical similarity or accuracy benchmarks. As LLMs
increasingly operate in open-ended and interactive recommendation settings, the
development of safe and credible systems where factuality is measurable becomes of
crucial importance.Human-Machine Interaction in AI-Applications: Approaches to Intelligent and Context-Aware Systems –
2.4.3.​
32
LLM Positivity Bias
The inclination to produce responses that are affirmative, agreeable, or emotionally
positive may improve user satisfaction in casual interactions. However, it poses risks in
recommendation settings, where over-optimistic or “sycophantic” (the model’s tendency
to affirm a user’s stated views or preferences, even when doing so leads to inaccurate or
misleading outputs, [27]) responses undermine the quality, fairness, and diversity of
suggestions. In recommender systems this bias typically manifests in the form of
uncritical praise and over reluctance to offer negative or challenging assessments.
In [27], sycophancy is stated as a subcategory of alignment failure. The authors’
empirical measurements reveal that sycophancy rates remain high across multiple models,
including ChatGPT and GPT-4, especially when the prompts include strong user opinions
(e.g., “I think this is the best movie ever made...”).
A more domain-specific analysis is provided by [31]. Through a series of experiments,
the study compares prompts that prioritize accuracy versus those prioritizing diversity,
fairness, or novelty. Results show that the former prompts consistently result in narrower
recommendations, skewed toward mainstream high-visibility items. Conversely, prompts
that attempt to diversify suggestions (e.g., lesser known, or unexpected phrases) lead to
reduced accuracy but broader genre and temporal coverage. The study also shows that
embedding fairness constraints in system roles (“act as a fair recommender”) is more
effective than adding fairness language within the prompt. In another example, the
CALM framework [32] introduces sentiment manipulators into response prompts and
evaluates to which extent LLMs reward positive language over neutral or negative
phrasing. The results show that models consistently assign higher quality scores to
outputs with emotionally positive language.
From a methodological standpoint, positivity bias is a serious challenge for evaluation.
Unlike hallucinations, which can often be diagnosed through inference check or external
knowledge bases, positivity bias is contextual, socially constructed, and often aligned
with user expectations. Hence why it’s hard to binarily classify, and instead requires
comparative and distributional analysis, e.g. assessing genre coverage and item diversity
across multiple recommendation outputs.Human-Machine Interaction in AI-Applications: Approaches to Intelligent and Context-Aware Systems –
33
Accordingly, several researchers recommend integrating bias-sensitive evaluation
pipelines, which involve role-based prompting, sentiment perturbation tests, and
fairness-aware metrics such as catalog coverage, exposure parity, and group-wise
performance variance. These approaches begin to treat positivity bias not as a harmless
side effect but as a core misalignment risk that can affect recommender reliability,
diversity, and trustworthiness.
2.5.​ Personalization in Recommender and Generation Systems
The foundational work of [33] offers a comprehensive theoretical viewpoint for
understanding personalization by including perspectives from information systems,
marketing, computer science, and social sciences. Namely, they construct a framework
consisting of four normative ideal types of personalization: architectural, instrumental,
relational, and commercial, and a classification scheme based on what is personalized, to
whom personalization is made, and who initiates the personalization (system vs. user).
This conceptual model highlights the complexity and multidimensionality of
personalization, positioning it not only as a technical function but also as a social
phenomenon. This view aligns with recent studies, such as [34], [35], which collectively
argue for more nuanced personalization that goes beyond simplistic user-item matching.
[35] provide a comprehensive taxonomy distinguishing between direct personalized text
generation and downstream task personalization, introducing granular categories such as
user-level, persona-level, and global personalization, as well as a typology of
personalization techniques including retrieval-augmented generation, prompt engineering,
embedding learning, and RLHF.
Several more works emphasize the capacity of LLMs to tailor outputs based on
user-preferences, profiles, and interactions histories.
The [16] survey positions
personalization as primary motivation for adopting generative models, highlighting use
cases such as personalized explanations and content adaptation in conversational
recommendation settings. Similarly, the [26] survey demonstrates multiple LLM
architectures specifically designed for personalization, including models like PALR,
PAP-REC and ControlRec, which incorporate user behavior and profile data through
fine-tuning or prompt engineering strategies. [21] further illustrate personalizationHuman-Machine Interaction in AI-Applications: Approaches to Intelligent and Context-Aware Systems –
34
through output examples where recommendation justifications are conditioned on prior
user activity, such as recent watch history​.
2.6.​ Related Work
The comprehensive survey by [20] highlights a future direction in LLM-enhanced
recommender systems: a personalized content generation paradigm where models adapt
item presentations (e.g., text, images) to individual user profiles. While the idea of
generating personalized content, such as rewritten movie synopsis, has been suggested as
a promising avenue, concrete implementations and evaluations remain limited.
An early step in this direction is the work by [19], who propose using LLMs to generate
post-hoc explanations for recommendations across three different system types:
feature-based, item-based collaborative filtering, and knowledge-based recommenders.
Their system compares LLM-generated natural language explanations with baseline
pattern-based ones, evaluating them via a user study on dimensions such as clarity,
satisfaction, persuasiveness, and trust. Results show a strong preference for the
LLM-based explanations, especially due to their richness and adaptability to user
preferences. While their approach lays important groundwork, this thesis explores the
generation of personalized item descriptions as a user-facing component of the
recommender system. Rather than using LLMs to explain algorithmic choices, the focus
here is on dynamically rewriting movie synopses in alignment with user-defined tone and
style preferences. This approach addresses underexplored challenges in personalization
and presentation within RS interfaces, while also contributing to open discussions around
hallucination, factuality, and user alignment in generative AI outputs.
In summary, the literature demonstrates significant advancements in recommender system
algorithms, user modeling, and the adoption of LLMs for various downstream tasks.
However, a notable gap persists at the intersection of personalized content presentation,
factuality assurance, and bias mitigation within recommendation contexts. This thesis
positions itself within that underexplored space, aiming to bridge technical capabilities
with user-centered linguistic personalization. Building on the insights from prior work,Human-Machine Interaction in AI-Applications: Approaches to Intelligent and Context-Aware Systems –
35
the next chapter details the methodological framework and system design that
operationalize this vision into a concrete experimental platform.Human-Machine Interaction in AI-Applications: Approaches to Intelligent and Context-Aware Systems –
36
3.​ Methodology
The developed system is a content-based movie recommender with an LLM layer for
personalization
implemented
downstream. The system is a demonstration of
implementation feasibility as well as an environment to test and evaluate outputs. Our
objective is not to achieve better accuracy of the recommendation engine but rather to
enhance the interfacing and personalization of the recommended item, regardless of the
recommender system’s architecture. Limiting the recommender system development in
this manner is not solely due to resource constraint, as it is also an opportunity to test the
robustness of the LLM layer in a system agnostic setting. Furthermore, the design, from
collecting the data, cleaning, preprocessing to building the recommender system and
integrating the LLM layer, was built with Minimal Viable Product (MVP) design
principles in mind. Containing the design as such was likewise in response to certain
limitations presented in the literature. The strategies used to overcome these limitations
will be discussed in due detail as they come up. As an example, the overall design was
made with scalability and lack of grounding in mind, as they appear as obstacles
encountered in some systems [24], where:
-​ Lack of grounding: Without external APIs or tool-calling, LLMs hallucinate items
or recommend non-existent content.
-​ Scalability: LLMs struggle to process large candidate sets (e.g., top-1000 items)
without retrieval mechanisms.
The data was collected from multiple sources as there was not one particular open source
dataset that satisfied all of the requirements. Thus the datasets obtained were subject to
multiple manipulation rounds and when certain entries were still missing, I ran scripts
over the Wikipedia API to complete the data acquisition stage. However, in some cases
where movies had e.g. missing genres, reviews or descriptions, they were not eliminated
nor filled with appropriate information. This was a decision to mimic real-world noisy
and inconsistent data, especially to again test the robustness of the LLM as a
plug-and-play function.Human-Machine Interaction in AI-Applications: Approaches to Intelligent and Context-Aware Systems –
37
3.1.​ System Overview
This architecture was designed not to optimize predictive accuracy, but to explore how
personalized
language
generation
can
reshape
the
user-facing
narrative
of
recommendations. As shown in Figure 3, the system sits at the intersection of
retrieval-based recommendation and dynamic content rewriting, occupying a middle
ground between conventional metadata presentation and fully generative dialogue
systems. The developed system consists of two major components: (1) a content-based
movie recommender, and (2) an LLM-based personalization layer for linguistic
adaptation of item descriptions.
Concretely, the recommender engine computes similarity scores using a composite of
genre encodings, sentiment-derived features, and textual embeddings. Once a top
recommendation is retrieved, the personalization module uses prompt-engineered inputs
to instruct an LLM (GPT-4o-mini) to rewrite the synopsis in alignment with user-stated
tone and style preferences. Figure 4 outlines the system architecture, emphasizing its
modular pipeline design. This structure enables each component to be evaluated
independently and flexibly swapped, supporting future experimentation with alternate
recommender backends or personalization models.
Figure 3. Positioning of The Proposed System in the Recommendation-Personalization Design SpaceHuman-Machine Interaction in AI-Applications: Approaches to Intelligent and Context-Aware Systems –
Figure 4: Architecture of the LLM-Augmented Movie Recommender System
38Human-Machine Interaction in AI-Applications: Approaches to Intelligent and Context-Aware Systems –
39
3.2.​ Data Preprocessing
The dataset was downloaded from the Kaggle data repository (www.kaggle.com) and has
an open source license. The data itself is obtained from the movie review aggregation
platform (www.rottentomatoes.com). It contains, as per dataset description, 1.4M+ movie
reviews on 140k+ unique movies with sentiment, score, runtime, revenue, etc. Moreover,
it
contains
two
separate
.csv
files:
rotten_tomatoes_movies.csv,
and
rotten_tomatoes_movie_reviews.csv. The set was obtained in February of 2025.
Each .csv file in its original form contains the following:
-​ rotten_tomatoes_movies.csv: id, title, audienceScore, tomatoMeter,
rating,
releaseDateTheaters,
releaseDateStreaming,
runtimeMinutes, genre, director, and boxOffice revenue...
(c1)
-​ rotten_tomatoes_movie_reviews.csv:
criticName,
isTopCritic,
id,
reviewId, creationDate,
originalScore, reviewState,
publicationName, reviewText, scoreSentiment, and reviewUrl...
(c2)
Multiple fields were dropped as deemed out of scope for this project. Whereby from (c1)
the following fields were retained: id, title, genre and director. And from (c2)
the following: id, reviewText, and scoreSentiment. Resulting in the following
dataset:
-​ aggregated_movies.csv: id, title, reviewText, scoreSentiment,
genre, director, writer and reviewUrl.
(c3)Human-Machine Interaction in AI-Applications: Approaches to Intelligent and Context-Aware Systems –
40
EDA was conducted on the final aggregated dataset, which forms the basis of all
downstream embedding and recommendation logic. We report descriptive statistics, class
distributions, and feature densities here.
First, the created dataset shows that about 50% of the movies don’t have a review text nor
a score sentiment. Since we want to combine the review text with the movie description
(which we will add to our dataset at a later point), we decided to drop all the movies that
have no review text. Furthermore, about ~37% of the writers, ~8% of the genres, and
~1.2% of the director values are missing. Since the writer and director values will not be
integrated as a feature in the scope of this project but may be integrated in later iterations,
we keep them as Null values without worrying about the balance. As for the missing
genre values, we keep those too as to test the robustness of our text embeddings’ logic
and the LLM contextual awareness.
In another round of cleaning we encounter some inconsistencies and noise, e.g. nonsense
and extremely long titles, duplicates, etc. so we drop them finally arriving at 39615 rows.
Here we run the following EDA:
Genre
The distribution of movie genres in the dataset exhibits a classic long-tail pattern (Figure
5). A small number of genres: most notably Drama (16,000+ titles), Comedy, and
Thriller, dominate the dataset, while a wide range of less frequent genres, including
Musical, Anime, Holiday, and LGBTQ+, appear far less often.
This skew is typical in movie corpora and reflects real-world production trends. However,
this imbalance also poses a challenge for genre-aware personalization, as rare genres
provide less training signal and are more susceptible to both recommendation bias and
LLM hallucination. To accommodate this distribution, genre metadata was multi-hot
encoded, allowing each movie to express multiple genres simultaneously. This enables
the recommender engine to model genre overlap flexibly and allows the LLM layer to
contextually integrate both dominant and niche genre information during synopsis
rewriting.Human-Machine Interaction in AI-Applications: Approaches to Intelligent and Context-Aware Systems –
41
Figure 5: Long-Tail Genre Distribution Across the Movie Corpus
Reviews
The dataset originally included over 1 million critic reviews. Titles without reviews were
dropped, leaving 39,615 movies with usable data. Review texts were later combined with
synopses for embedding. Basic statistics, such as review counts and sentiment distribution
(see Figure 6), were examined to characterize dataset skew and to inform evaluation of
potential LLM bias in later stages.
Figure 6: Areas of Advantage That LLMs Have Over Traditional Deep Learning Models in Recommender
SystemsHuman-Machine Interaction in AI-Applications: Approaches to Intelligent and Context-Aware Systems –
42
Review Sentiment
We quantified sentiment variability for each movie as the proportion of reviews
disagreeing with the majority sentiment (positive vs. negative). To understand the overall
distribution (Figure 7), we computed summary statistics across all 39,615 movies. The
variability scores ranged from 0 (perfect agreement) to 0.50 (maximal disagreement). On
average, movies sat at about 0.25 (SD ≈ 0.21), with a median of 0.32, indicating that half
of all titles have at most 32% of their reviews in the minority camp. The distribution is
right‐skewed: the 75th percentile is 0.47, the 90th percentile 0.50, and the highest values
hit the theoretical cap. This pattern shows that most movies enjoy relatively consistent
sentiment, while a small subset elicits much more divided opinions. Furthermore, we
aggregated all 1,063,673 reviews and found that 66.90% (711,605) were labeled
POSITIVE and 33.10% (352,068) NEGATIVE, indicating an overall positive skew in the
dataset.
Figure 7: Summary Statistics of Per-Movie Sentiment Disagreement
Synopsis TF-IDF
We ran TF–IDF over each movie’s synopsis (using unigrams + bigrams), first removing
common English stop‐words and an expanded “metadata” list (e.g. directed, starring,
movie, festival). We limited our vocabulary to terms appearing in 2–30% of synopses,
then summed each term’s TF–IDF score across the corpus and ranked them. To explore
head, mid‐tail and long‐tail keywords, we computed percentile ranks of those summed
scores and split the terms into four quartile buckets (0–25%, 25–50%, 50–75%,
75–100%). Finally, we inspected the top terms in each quartile to see which thematic
words dominate at each frequency tier.
Dataset Enrichment
Neither of the datasets contained a textual description of the movie so we scrapped the
plot/description/synopsis sections from their Wikipedia for each of the movies in ourHuman-Machine Interaction in AI-Applications: Approaches to Intelligent and Context-Aware Systems –
43
aggregated dataset (C3) and added them in a new column we called ‘synopsis’. Many
of the movies either didn’t have a designated Wikipedia page or their Wikipedia page
didn’t have a descriptive section. We decided to leave these movies in our dataset for later
LLM hallucination testing and evaluation. Some movies had too short synopsis, some had
none-sensical descriptions or noise. We left those as is for the same reason.
3.3.​ Feature Engineering
To construct a semantically rich and interpretable representation of each movie, three
distinct feature groups were engineered and concatenated. These include categorical,
textual, and affective dimensions.
Genre Encoding
The genre information associated with each movie was provided as comma-separated
strings containing one or more labels (e.g., “Comedy, Drama”). Each movie's genre
metadata was preprocessed as a multi-hot vector
where each dimension corresponds to one of the
genre categories present in the
dataset. This allowed for direct comparison of genre overlap between movies and was
used as an input to both the similarity computation and the user-facing preference
interface.
Sentiment-Derived Features
Each movie in the dataset was associated with a collection of user reviews, which had
been previously classified as either positive or negative using a pretrained sentiment
classifier. From these binary labels, two aggregate features were computed at the movie
level.
-​ Positivity percentage: the proportion of positively labeled reviews among all
reviews for a given movie, reflecting general audience sentiment.
-​ Sentiment variability: the standard deviation of sentiment scores (after mapping to
numeric values), used to capture disagreement or polarization in audience opinion.Human-Machine Interaction in AI-Applications: Approaches to Intelligent and Context-Aware Systems –
These features were normalized using min-max scaling to the interval
44
, and
concatenated into a two-dimensional vector
Textual Embeddings
The semantic content of each movie was encoded using a sentence-level embedding
vector. A combined text field
, comprising the synopsis and user reviews, was
embedded using the all-MiniLM-L6-v2 model from the Sentence-Transformers
library. The resulting vector:
was L2-normalized to unit length to satisfy the requirements of cosine similarity
computation:
Final Representation
All feature blocks were concatenated to form the final composite movie representation
vector:
This unified vector served as the input to the similarity-based retrieval system described
in the following section. Although experiments were conducted using feature-specific
weights to adjust the influence of genre and sentiment dimensions, these were ultimately
omitted, as they did not yield measurable improvements in output quality.Human-Machine Interaction in AI-Applications: Approaches to Intelligent and Context-Aware Systems –
45
Feature Selection
By aggregating the two original datasets we eliminate values that were deemed irrelevant
for the scope of this project. From the resulting .csv (c3) and our added features we
compile the following columns to be our final dataset id, title, genre, synopsis,
revire_text, text embeddings, genre embeddings, score_sentiment,
and sentiment_variability.
The selection of features for the final similarity computation vector was made in regards
to both technical feasibility and intentional scope control. While the raw dataset contained
a variety of structured metadata fields, such as cast, director, writer, and
production-related attributes, these were excluded from the final dataset (c3). The
exclusion of these additional metadata fields is not intended as a limitation, but as a
design choice to balance project depth with execution time and resource availability.
Their potential future integration is acknowledged and encouraged in later iterations,
particularly for systems that extend personalization into character- or actor-aware
generation. For the purposes of this study, however, restricting the input vector to genres,
textual embeddings, and sentiment-based features allowed for clearer system behavior,
interpretable similarity, and manageable computational overhead.
3.4.​ Recommendation Engine Design
The recommender system is implemented as a content-based retrieval model that
identifies and ranks similar movies based on their semantic, affective, and categorical
representations. Each movie is encoded as a fixed-dimensional feature vector, as
described in the previous section. The core of the engine operates a cosine similarity
between these vectors to retrieve the top-N most similar candidates.
Similarity Metric
Given a query movie m with feature vector
, and a candidate movie
similarity is computed using the cosine similarity metric:
,Human-Machine Interaction in AI-Applications: Approaches to Intelligent and Context-Aware Systems –
46
Retrieval Logic
To allow efficient querying, pairwise cosine similarities between all movies were
precomputed and stored in a dense matrix format. Each row represents a movie and
contains its top-N where N=10 most similar candidates along with their respective
similarity scores. This matrix was stored externally in chunked .csv files and loaded into
memory during runtime for fast retrieval.
Given a user-selected movie m , the system retrieves the corresponding list of the top-N
most similar movies
. The top-ranked recommendation i 1 is passed into
the LLM personalization layer, while the remaining items are shown in an expandable list
to provide additional context to the user.Human-Machine Interaction in AI-Applications: Approaches to Intelligent and Context-Aware Systems –
47
﻿
Figure 7: Heatmaps of Cosine Similarities Between Movie Representations – Cosine similarity heatmaps
for two 20×20 movie subsets, showing representation overlap in the embedding space. Yellow regions
indicate high similarity; darker regions reflect weak or no semantic connection. Rows and columns were
hierarchically clustered using a 1–similarity distance metric to surface emergent groupings. These
visualizations highlight both tight genre/topic clusters and isolated outliers in the vector space.Human-Machine Interaction in AI-Applications: Approaches to Intelligent and Context-Aware Systems –
48
3.5.​ Personalization Layer (LLM Integration)
The LLM is implemented as a personalization layer that dynamically rewrites the
synopsis of the top recommended movie. The implementation is downstream to the
recommender system and is not designed to alter the recommendation logic itself, but to
adapt the presentation of the recommended content to better match the user’s individual
narrative and emotional preferences. Rather than presenting the original movie’s
description verbatim, the system rewrites it to highlight information that is relevant to the
user’s profile. This profile includes movie specific parameters:
-​ Emotional tone (e.g. uplifting, dark)
-​ Narrative style (e.g. minimalist, plot-driven)
-​ Favored genres
-​ Thematic elements to highlight or avoid
The LLM acts as a narrative analyzer, gaining knowledge of the recommended movie
itself and analyzing the description to offer an elaborate semantic explanation of the
recommended movie.
We implemented a small “prompt‐builder” module (prompt_builder_v2.py) (see
appendix for full prompt code) that ingests:
-​ The recommended movie’s title, synopsis, genre, and aggregate review snippets
-​ The user’s profile (tone/style preferences, recently watched title and its synopsis)
-​ An optional target language (English/German)​
and produces a single, coherent prompt that (a) emphasizes only the supplied
movie content, (b) highlights elements matching the user’s tastes, and (c) warns
the model not to hallucinate. We then pass that prompt into
rewrite_synopsis_v2.py, which calls the OpenAI Chat API to generate
the personalized rewrite.​Human-Machine Interaction in AI-Applications: Approaches to Intelligent and Context-Aware Systems –
49
Baseline Persona Steering:
In our automated pipeline, we opted for a lightweight form of persona conditioning,
namely, passing each user’s preferred genres and most recently watched title into the
prompt, while leaving the deeper user_profile fields (tone, style, likes, avoid) unset. This
“minimal‐steer” strategy was intentional: it let us establish a baseline for how much
genre‐level and historical/contextual cues alone influence factual fidelity and sentiment
shift, without overloading the LLM with a barrage of stylistic instructions. True,
fine‐grained personalization (e.g. “grand, sweeping tone for Historical/Epic Drama
Lover”) was deferred to our subsequent user‐study phase, where complete profiles and
human judgments could validate whether those richer prompts have an impact on
perceived alignment.
Model Selection and Justification
The system employs a hosted LLM via the OpenAI API, specifically GPT-4o-mini for its
balance of cost-efficiency, contextual depth, and multilingual capability. Rather than
fine-tuning the model, which would require substantial computational resources and
labeled data, a prompt-only steering approach is used. This choice is motivated by the
increasing efficacy of prompt engineering as a low-cost, high-impact method for aligning
general-purpose language models with user intent.
The LLM outputs a personalized synopsis that maintains the narrative arc of the movie
while adjusting tone, emphasis, and descriptive framing. For example, a war movie may
be reframed to emphasize personal sacrifice and human connection if the user prefers
sentimental storytelling. Alternatively, the same movie might be presented with clinical
detachment and minimalism for a user preferring stripped-down narratives.
These personalized descriptions are shown to the user as a replacement for the original
synopsis and form the primary basis for subjective evaluation.Human-Machine Interaction in AI-Applications: Approaches to Intelligent and Context-Aware Systems –
3.6.​ Frontend and Interaction Flow
Figure 8: User Interface of the Personalization User Interface
50Human-Machine Interaction in AI-Applications: Approaches to Intelligent and Context-Aware Systems –
51
Figure 9: Example Output of the Personalized Movie Synopsis Generator
The user journey begins with the user selecting a movie they enjoy or have recently
watched from a searchable dropdown menu populated with titles from the dataset. They
then proceed to define their preference profile through a structured form. All fields are
optional, allowing the system to evaluate performance across a range of profile
completeness scenarios.
Upon form submission, the system retrieves the top recommendation using precomputed
similarity scores, generates a personalized synopsis using the LLM integration layer, andHuman-Machine Interaction in AI-Applications: Approaches to Intelligent and Context-Aware Systems –
52
displays both the rewritten text and a collapsible list of alternative recommendations. A
secondary form then appears, prompting the user to rate the personalized synopsis and
optionally provide free-form feedback. The entire flow is managed using Streamlit.
To accommodate bilingual evaluation, the interface supports an English/German language
toggle. All labels and prompts adapt based on the selected language, and the LLM
receives a corresponding language parameter to localize its output.Human-Machine Interaction in AI-Applications: Approaches to Intelligent and Context-Aware Systems –
53
3.7.​ Logging and Data Capture
Every user–model interaction is recorded as a single JSON object in a
line-delimited (JSONL) file for later analysis and reproducibility. Each record
contains:
-​ Metadata: a precise timestamp and a unique session ID
-​ Inputs: the user’s language, the movie they just watched (title + synopsis),
their profile attributes (tone, style, genre prefs, likes/avoids), and any fields
that were empty or skipped
-​ Process and Output: the recommended movie title and synopsis, the
generated personalized synopsis, and the top-N recommended neighbors
(with similarity scores and genres)
-​ Feedback: user ratings of “match” and “engagement,” a yes/no
“would_watch,” free-text comments, and a run counter
Storing logs in this structured way lets us reconstruct every prompt, output, and
rating for offline evaluation, error analysis, and reproducibility.
3.8.​ Evaluation Design
3.9.​
Recommender System Accuracy
Due to the absence of user interaction data, traditional ranking metrics could not be
applied. Qualitative spot checks confirmed that recommended movies consistently
matched the genre and thematic profile of the query item. Thus, the recommender engine
was deemed sufficient for supplying candidates for the personalization layer.Human-Machine Interaction in AI-Applications: Approaches to Intelligent and Context-Aware Systems –
3.10.​
54
User-Tests
To complement the simulated evaluation, a limited user study (N = 33) was conducted to
gather subjective impressions of the LLM-personalized synopses. Participants were asked
to interact with the web-based application by selecting a recently watched movie (or a
movie they like), defining a personal preference profile and receiving a personalized
rewritten synopsis for a top-recommended movie along with a list with the top 5 most
similar movies (see figure 8, 9).
After reading the personalized synopsis, participants were prompted to rate how well the
synopsis aligned with their stated preferences and how compelling or appealing was the
synopsis on a 5-point Likert scale, then they were asked whether they would watch the
recommended movie based on the provided synopsis. Finally, they were asked to provide
optional open-text feedback. (See Figure 10). This design captures both quantitative
(alignment rating) and qualitative (free-form commentary) dimensions of perceived
personalization quality. All fields in the UI were optional but the participant was not
informed of this to examine whether there are fields that might cause cognitive strain.
The user testing phase was exploratory in nature and not intended to achieve statistical
significance, but rather to surface subjective patterns, perceived strengths, and limitations
of the personalization layer in real interaction scenarios. All user interactions were logged
systematically, including input profiles, recommended movies, generated synopses, and
feedback.Human-Machine Interaction in AI-Applications: Approaches to Intelligent and Context-Aware Systems –
55
Figure 10: User Feedback Interface for Synopsis Evaluation
3.11.​
3.11.1.​
simulated LLM Evaluation
Metrics (BERTScore, NLI, QA-Consistency, Sentiment, Hallucination, etc.)
We initially ran a pilot on N = 40 movie blurbs testing only two metrics: BERTScore and
global-level NLI entailment. Here we observed very low semantic overlap and uneven
factual grounding. BERTScore uses contextual token embeddings to measure overall
lexical-semantic overlap between the personalized synopsis and the original. On the other
hand,
global
NLI
entailment
feeds
each
original–personalized
pair
into a
RoBERTa‐MNLI model and returns a single probability that the synopsis is entailed by
the plot. Logically we expected this not to be enough since the personalized contentHuman-Machine Interaction in AI-Applications: Approaches to Intelligent and Context-Aware Systems –
56
renders the original context in ways that might be semantically subtle and unobservable
for off-the-shelf metrics.
While the discussed literature (p.29) turns to specialized factuality diagnostics –
SummaC, QAFactEval, SRLScore, and custom entailment classifiers to probe model
grounding more rigorously ​Thesis-16, we opted for a streamlined yet comparable
approach. Instead of integrating a separate SummaC pipeline, we built our sentence-level
entailment on the same Roberta-MNLI backbone to compute per-sentence probabilities,
offering similar fine-grained insight with no extra model training. Likewise, our
QA-consistency metric parallels QAFactEval’s QA‐based framework but extends it
bidirectionally and scores via token-level F1 to penalize both omissions and fabrications.
This choice kept our evaluation self-contained, reproducible on CPU, and aligned with
the off-the-shelf tools used elsewhere in our pipeline.
To capture the finer-grained errors we then introduced sentence-level entailment and
QA-consistency and increased our sample size to N = 1600 movies. Sentence-level
entailment averages per-sentence NLI scores to expose omissions at the sentence level.
Meanwhile, QA-consistency (1) generates fact-checking questions on the source, (2)
answers them against both source and summary, and (3) computes token-F1 to penalize
both missing and false information. This enables us to distinguish “echo-and-drift”
behavior where the model takes a phrase or two then wanders into hallucination or
omission.
Additionally,
we
scaled
our
simulated
metric
suite to calculate
hallucination‐rate which is defined as the proportion of source-derived facts in the
personalized synopsis that do not appear in the original (one minus QA-precision) and
VADER sentiment shift (VADER is a lightweight, rule-based sentiment analyzer
optimized for short, opinionated texts, returning a compound polarity score between –1
and +1).
3.11.2.​
Metrics Score Interpretation
BERTScore F1 (0 to 1)​
≈ 1.0 → Personalized text reuses nearly all source tokens (high overlap).​
≈ 0.0 → Almost no direct overlap (heavy paraphrase or novel wording).​
< 0 (rare, after baseline rescaling) → Divergence below corpus baseline.Human-Machine Interaction in AI-Applications: Approaches to Intelligent and Context-Aware Systems –
57
Global NLI Entailment (0 to 1)​
> 0.5 → The entailment model judges the rewrite likely follows from the source.​
< 0.5 → More likely “neutral” or “contradiction” than full entailment.
Sentence-Level Entailment (0 to 1)​
Average of per-sentence entailment probs.​
Closer to 1.0 → Most sentences are individually supported by the source.​
Closer to 0.0 → Many sentences lack direct grounding.
QA-Consistency (0 to 1)​
= 1.0 → All fact‐checking questions answered identically between source and summary
(perfect factual match).​
= 0.0 → No matching answers; complete factual drift or omission.
Hallucination Rate (0 to 1)
= 0.0 → No invented facts (every summarized fact appears in the source).​
= 1.0 → All “facts” in the rewrite are not found in the source (full hallucination).
Sentiment Shift (≈ –1 to +1)
> 0 → Rewrite is more positive than the original.
< 0 → Rewrite is more negative or neutral.
≈ 0 → No net change in sentiment.
3.11.3.​
Statistical Analysis
We began by computing descriptive statistics (means m and standard deviations SD) for
each continuous metric and visualizing their distributions to summarize central tendency,
variability, and any notable skew or outliers. Factual consistency was measured using the
RoBERTa-MNLI “entailment” probability for each original–rewritten synopsis pair, while
sentiment drift between versions was quantified with VADER. To explore relationships
among variables, we used Pearson’s r to assess linear associations (e.g., between
sentiment shift and factuality score) and one-way ANOVA to compare mean metricHuman-Machine Interaction in AI-Applications: Approaches to Intelligent and Context-Aware Systems –
58
scores across persona conditions, substituting Kruskal–Wallis tests when distributional
assumptions were violated. Within-subject differences between original and personalized
synopses were evaluated with Wilcoxon signed-rank tests. Finally, we fitted a single
multiple linear regression model – using ordinary least squares – to predict hallucination
rate from mean review sentiment and sentiment shift, reporting model coefficients,
confidence intervals, R2, and the overall F-test.
3.11.4.​
Sample Size / Power Justification
We chose a sample size of N=1600 represents which are paired with 8 personas; so that
we have 200 movies per persona. By doing this we design to balance between statistical
rigor and practical feasibility. With standard deviations in simulated metrics such as
BERTScore-F1 and QA-consistency typically in the range of 0.1, a sample size of N=200
yields 95% confidence interval of approximately ±1.4 % on the mean. From a power
analysis perspective, 200 paired samples provide over 80% statistical power at α = 0.05 to
detect medium-sized effects (Cohen’s d ≈ 0.5) and remain adequately powered for smaller
effects down to d ≈ 0.3.
3.11.5.​
Persona And Length Schemes
To investigate whether our prompt-design and the amount of source material
systematically influenced the LLM’s faithfulness, we partitioned the full set N movies
into two independent schemes:
Persona Schemes​
Each original-personalized synopsis pair was generated using one of eight simulated
audience personas; Action Enthusiast; High-Concept Sci-Fi Buff; Family-Friendly
Viewer;
Historical/Epic
Drama
Lover;
Horror/Thriller
Aficionado;
Documentary/True-Story Fan; Character-Driven Drama Fan; and Light-Hearted Comedy
Seeker. As mentioned in the previous section, we allocated 200 pairs to each persona,
ensuring balanced representation.
Synopsis-Length SchemesHuman-Machine Interaction in AI-Applications: Approaches to Intelligent and Context-Aware Systems –
59
To determine if the volume of ground-truth information affects hallucination, the
hallucination-rate
(and
related NLI/QA
metrics)
was examined across three
synopsis-length schemes (<30, 30-100, >100 words) to test whether very short sources
drive up invention.
3.11.6.​
Heuristic Choices (Top-K Sentences, Number of QA Questions, Batching)
To balance metric coverage against runtime on a CPU‐only machine, we fixed several
pragmatic hyper-parameters in our simulated evaluation:
-​ Top-K salient sentences (k = 5):​
For sentence-level NLI entailment, we first split each original synopsis into
sentences and computed TF–IDF scores over that mini‐corpus. We then selected
the top five highest-scoring sentences to compare against the personalized
synopsis. This ensures that we focus entailment checks on the most content-rich
portions of the source without processing the entire text.​
-​ Number of QA questions (n = 5 per direction):​
Our bidirectional QA-consistency metric over-generates up to 2 × n raw questions
using a T5-small “generate questions” prompt, then filters for the first five that
yield non‐empty answers when posed to the source and summary. Capping at five
questions each direction provides a meaningful sample of fact‐checking queries
while keeping inference calls under control.​
-​ Batching and pipeline reuse:​
We instantiated each transformer pipeline (BERTScore, NLI, QA) only once at
startup and processed inputs in batches wherever supported. In particular, we
grouped up to eight NLI or QA calls together to leverage parallelism in the
CPU‐optimized pipeline implementation. This reduced per‐sample overhead and
allowed the full 1600-item run to complete in a single overnight session.
These heuristics introduce a degree of arbitrariness (different choices of k or n may shift
absolute metric values) but they were necessary to achieve tractable runtimes without
compromising the breadth of our faithfulness evaluation.Human-Machine Interaction in AI-Applications: Approaches to Intelligent and Context-Aware Systems –
3.11.7.​
60
Reproducibility And Resources
To ensure that our evaluation can be faithfully reproduced and that resource use is
transparent, we document the following:
-​ Hardware configuration:​
All experiments ran on a single CPU‐only workstation (Intel Core i7 @ 2.80GHz
× 8,16 GB RAM). No GPU acceleration was used, keeping compute requirements
accessible to standard desktop environments.
-​ Software stack & versions:​
Python, PyTorch, HuggingFace Transformers, jsonlines, bert_score, scikit-learn,
and nltk (with VADER lexicon downloaded). Random seeds were fixed to
stabilize T5 sampling and TF-IDF sentence selection.
-​ Prompt-builder versioning:​
We used the prompt_builder_v2.py module, paired with rewrite_synopsis_v2.py,
ensuring deterministic prompt templates and API parameters (model =
gpt-4o-mini, temperature = 0.7, max_tokens = 600).
-​ Data filtering & error handling:​
Records with empty source or failed generations were skipped (< 1% of data). All
exceptions (e.g., tokenizer over‐length or QA empty‐answer cases) were logged
but did not interrupt the batch.​Human-Machine Interaction in AI-Applications: Approaches to Intelligent and Context-Aware Systems –
61
4.​ Results
4.1.​ User Study (N = 33)
On a 5-point scale, 33 participants rated how well each synopsis matched their
preferences at 3.12 (SD = 1.05), and how engaging they found it at 2.92 (SD = 1.18).
Overall, 54.5 % of participants indicated they would watch the movie based on the
personalized synopsis.
4.2.​ Descriptive Statistics (Means, SDs, Histograms)
BERTScore F1 And Global NLI Entailment Distributions
Overall 1600 personalized synopses, BERTScore F1 ranged from –0.422 to 0.498 (M =
0.103, SD = 0.163). Figure 11 plots the full distribution with vertical lines indicating zero
overlap (dashed), the mean (green), and the median (orange; 0.12). Global entailment
scores across the same 1600 pairs ran from 0.004 to 0.939 (M = 0.195, SD = 0.156).
Figure 12 shows the distribution of global NLI entailment.Human-Machine Interaction in AI-Applications: Approaches to Intelligent and Context-Aware Systems –
Figure 11: Distribution of BERTScore F1 for Personalized Synopses
Figure 12: Distribution of Global NLI Entailment Scores
62Human-Machine Interaction in AI-Applications: Approaches to Intelligent and Context-Aware Systems –
63
Sentence-level Entailment
Each personalized synopsis was also evaluated via sentence-level entailment, averaging
Roberta-MNLI probabilities over the top-5 TF-IDF salient sentences. Across all 1 600
pairs, scores ranged from 0.088 to 0.986 (M = 0.791, SD = 0.166). (Figure 13)
Figure 13: Sentence-Level NLI Entailment Scores for Personalized Synopses
QA-Consistency
QA-consistency measures token-level F1 agreement between answers extracted from the
source vs. the personalized synopsis (five questions each way). Across all 1600 pairs,
QA-consistency scores ranged from 0.0 (no overlap) to 1.0 (perfect match), with a mean
of 0.345 (SD = 0.363) and a median of 0.230. (Figure 14).Human-Machine Interaction in AI-Applications: Approaches to Intelligent and Context-Aware Systems –
64
Figure 14: Distribution of QA-Consistency Scores Across Personalized Synopses
Hallucination Rate
Hallucination rate (Figure 15) varied from 0.000 (no invented facts) to 1.000 (all facts
invented) across the 1600 pairs (M = 0.445, SD = 0.422; 25th = 0.000, 75th = 1.000).
Figure 15: Distribution of Manually Annotated Hallucination RatesHuman-Machine Interaction in AI-Applications: Approaches to Intelligent and Context-Aware Systems –
65
Sentiment Shift
We computed the difference in VADER compound sentiment between each personalized
synopsis and its original (Figure 16). Across all 1 600 pairs, sentiment shifts ranged from
–0.957 to +1.566, with a mean of +0.291 (SD = 0.311) and a median of +0.302.
Figure 16: Histogram of Sentiment Shift Between Original and Personalized Synopses
We also tallied how many personalized synopses for each of the eight personas were
completely hallucinatory (i.e., hallucination rate = 1.0) (Figure 17). Out of 200 rewrites
per persona, the counts were: Action Enthusiast – 62; High-Concept Sci-Fi Buff – 60;
Family-Friendly Viewer – 56; Historical/Epic Drama Lover – 55; Horror/Thriller
Aficionado – 53; Documentary/True-Story Fan – 52; Character-Driven Drama Fan – 50;
and Light-Hearted Comedy Seeker – 46.Human-Machine Interaction in AI-Applications: Approaches to Intelligent and Context-Aware Systems –
66
Figure 17: Number of Fully Hallucinated Synopses by User Persona
4.3.​ Correlations Analyses
Inter‐Metric Correlations
QA-consistency and hallucination rate are strongly inversely correlated (r = –0.66),
indicating that higher rates of invented content coincide with lower answer-agreement
scores. BERTScore F1 correlates moderately with QA-consistency (r = +0.22) and weakly
negatively with hallucination rate (r = –0.17). Sentence-level entailment shares a small
positive correlation with BERTScore F1 (r = +0.14) but is largely independent of the other
metrics (|r| < 0.10 for all remaining pairs). Sentiment shift (Δ sentiment) exhibits
near-zero correlations (–0.06 ≤ r ≤ +0.05) with every factuality metric.Human-Machine Interaction in AI-Applications: Approaches to Intelligent and Context-Aware Systems –
67
Figure 18: Correlation Matrix of Evaluation Metrics
Pearson correlations among review sentiment, sentiment shift, and hallucination rate
(Figure 19, 20, 21) were computed over all 1600 movie–synopsis pairs. The correlation
between mean review sentiment and hallucination rate was r = –0.079 (p = 0.0015). The
correlation between mean review sentiment and VADER‐based sentiment shift
(personalized – original) was r = +0.173 (p = 2.91 × 10−12). Finally, the correlation
between sentiment shift and hallucination rate was r = +0.036 (p = 0.149).Human-Machine Interaction in AI-Applications: Approaches to Intelligent and Context-Aware Systems –
Figure 19: Relationship Between Review Sentiment and Hallucination Rate
Figure 20: Relationship Between Review Sentiment and Sentiment Shift in LLM Outputs
68Human-Machine Interaction in AI-Applications: Approaches to Intelligent and Context-Aware Systems –
69
Figure 21: Relationship Between Positivity Drift and Hallucination in LLM Outputs
4.4.​ Inferential Tests (Wilcoxon, Kruskal-Wallis, ANOVA,
Regression)
The paired Wilcoxon signed‐rank test confirms a highly significant positivity shift in
personalized synopses (W = 114 821, p < 1 × 10−176). In contrast, hallucination rates do
not differ by persona (Kruskal–Wallis H = 8.250, p = 0.311; one‐way ANOVA F = 1.300,
p = 0.247), but they do vary modestly by synopsis‐length bucket (H = 6.615, p = 0.0366).
Finally, an OLS regression of hallucination rate on mean review sentiment and sentiment
shift (Table 4) yields an R2 of 0.009 (F = 7.120, p = 0.0008); review sentiment is a
significant negative predictor (β = –0.123, p = 0.001), while sentiment shift is a smaller
positive predictor (β = 0.070, p = 0.042).Human-Machine Interaction in AI-Applications: Approaches to Intelligent and Context-Aware Systems –
70
Table 4: Linear Regression Predicting Hallucination Rate from Review Sentiment and Sentiment Shift
4.5.​ Qualitative Snippets (0.0 vs 1.0 Hallucination Examples)
To illustrate how hallucination manifests at different levels of the rating scale, we present
representative examples of personalized synopsis rewrites scored at 0.0 (no hallucination)
and 1.0 (complete hallucination). The examples in Figure 22 were selected to
qualitatively ground the scoring process and to give the reader a clearer sense of what
constitutes factual preservation versus distortion in this context.Human-Machine Interaction in AI-Applications: Approaches to Intelligent and Context-Aware Systems –
Figure 22: Comparative Examples of Personalized Synopses With and Without Hallucination
71Human-Machine Interaction in AI-Applications: Approaches to Intelligent and Context-Aware Systems –
72
5.​ Discussion
5.1.​ Overview of Key Findings
Across 1600 personalized rewrites, our simulated metrics paint a consistent picture: the
model heavily paraphrases the studio synopsis (mean BERTScore F1 = 0.103, SD = 0.163;
global NLI entailment = 0.195, SD = 0.156) while still preserving core facts at the
sentence level (mean sentence-level entailment = 0.791, SD = 0.166) and through
question-answer agreement (mean QA-consistency = 0.345, SD = 0.363). Yet nearly half
of all rewrites include invented content (mean hallucination rate = 0.445, SD = 0.422),
with 38 % of synopses entirely free of hallucinations and the upper quartile fully
fabricated. The personalization layer also introduces a substantial positivity bias (mean
Δsentiment = +0.291, SD = 0.311; Wilcoxon W = 114 821, p < 10−16), independent of
factual fidelity (r(Δsentiment, halluc_rate) = +0.036, p = 0.149). Neither critic review
tone nor synopsis length meaningfully explains hallucination variance (r = –0.079, p =
0.0015; r = +0.060, p = 0.017), and inferential tests reveal no significant differences in
hallucination by persona (Kruskal–Wallis H = 8.25, p = 0.311; ANOVA F = 1.30, p =
0.247), though a small length effect emerges (H = 6.62, p = 0.037). A regression confirms
that more positive reviews slightly protect against invention (β = –0.123, p = 0.001) while
larger sentiment shifts modestly increase hallucination (β = +0.070, p = 0.042).Human-Machine Interaction in AI-Applications: Approaches to Intelligent and Context-Aware Systems –
73
5.2.​ Hallucination vs. Fidelity Trade-off
Our simulated metrics paint a clear tension between stylistic creativity and factual
grounding. On one hand, low surface‐level scores - BERTScore F1 and global NLI
entailment both hovering near 0.10–0.20 - show that the model almost always rewrites
heavily rather than mirror studio text. On the other hand, high sentence‐level entailment
and QA‐consistency reveal that many core facts do survive this paraphrasing: most
sentences still trace back to the original, and a majority of question–answer pairs remain
intact. In effect, the LLM opts to prioritize stylistic variation with language, trading
token-for-token fidelity for more fluent, varied prose, yet it often preserves the underlying
narrative skeleton. This trade-off suggests that any attempt to curb hallucinations must
carefully balance grounding mechanisms (e.g. retrieval‐augmentation or stronger
entailment prompts) against the very creativity that makes these personalized synopses
engaging.
5.3.​ Positivity Bias Implications
Our findings confirm that the LLM personalization layer systematically favors each
synopsis with a sunnier tone, shifting sentiment markedly upward across nearly all
rewrites. This echoes prior reports of generative models favoring affirmative, enthusiastic
language, which can indeed boost perceived engagement and align with user expectations
for uplifting content. However, unchecked positivity also risks misrepresenting the source
material–masking darker themes or neutral nuances in service of a more agreeable
narrative. Crucially, we find this cheerfulness operates independently of factual accuracy:
more upbeat rewrites are no more (or less) likely to invent details than neutral ones. From
a design standpoint, this decoupling means that controlling tone and curbing
hallucinations require distinct interventions. To temper excessive optimism without
hindering
creativity,
one
might introduce sentiment-regularization prompts or
post-generation filters that clamp tone to a desired range.
To rein in excessive optimism without hampering stylistic flair, one can introduce
sentiment‐anchoring prompts (e.g. “maintain the original tone” or specifying a sentiment
range), temperature or top-p tuning to limit exuberant sampling, or sentiment‐regularized
decoding methods that leverage a lightweight classifier to reject outputs exceeding aHuman-Machine Interaction in AI-Applications: Approaches to Intelligent and Context-Aware Systems –
74
desired positivity threshold. These targeted interventions allow future systems to deliver
engaging, emotionally appropriate rewrites while preserving the factual integrity your
application demands.
5.4.​ Persona-Alignment Gaps And Baseline Steering
Despite structuring our pipeline to supply each rewrite with its target persona’s preferred
genres and most recently viewed movie, the generated synopses show remarkably little
stylistic differentiation across the eight profiles. Quantitatively, neither ANOVA nor
Kruskal–Wallis tests detected any persona‐level effects on hallucination or sentiment
metrics, and qualitative examples consistently read as generic blurbs rather than
“High‐Concept Sci‐Fi” or “Historical/Epic Drama” narratives. This uniformity
underscores a clear gap: minimal genre/history cues alone do not suffice to imprint
distinct persona tones or framing onto the model’s output.
This shortfall is by design. We deliberately adopted a baseline‐steering strategy -
injecting only lightweight context signals (genre labels and watched‐title metadata) and
deferring deep persona specifications (tone, style, likes, avoid) to our
forthcoming user‐study phase. The goal was to measure how much lift such minimal
conditioning could provide in terms of factual fidelity and sentiment shift, without
overwhelming the LLM with extensive prompt instructions. The resulting “generic
rewrite” baseline serves as a clean control: any stylistic gains observed in the user tests
can be attributed to the richer persona prompts, rather than to confounding factors in our
simulated evaluation.
5.5.​ Qualitative Analysis of Full-Hallucination Cases
A close look at examples with a hallucination rate of 1.0 reveals a handful of recurring
patterns tied to input quality and prompt design. First, whenever the original Wikipedia
synopsis was missing or extremely sparse (e.g., Run Lola Run, Chemical Cut), the model
fell back on secondary sources – either the scraped critic reviews or its own latent
knowledge – to fill in gaps. In Run Lola Run and one year, one night, it seamlessly wove
review language into a coherent narrative; in Chemical Cut, it even drew on broader
movie lore rather than the supplied reviews. Conversely, when all metadata fields wereHuman-Machine Interaction in AI-Applications: Approaches to Intelligent and Context-Aware Systems –
75
empty (as in Dead & Beautiful), the LLM defaulted to the boilerplate “Based on the
movie ‘None...’” line, underscoring the need for robust handling of missing inputs.
Second, although these rewrites introduce content not present in the studio synopsis, they
are far from random. In Lord of Tears, the model repackages review snippets into an
artful, opinion-inflected prose style; in Papi Chulo, it summarizes and highlights
reviewer-expressed themes to craft a compelling narrative. A few cases (e.g., enter
madame) demonstrate implicit guard-rails: preserving the title and genre without
inventing new plot points. Together, these observations suggest that reducing unwanted
hallucination will require both stricter source-vs-review filtering and smarter handling of
missing or sparse inputs, rather than wholesale disabling of the LLM’s generative
creativity.
5.6.​ Qualitative Analysis of Zero-Hallucination Cases
Both It Is Fine! Everything Is Fine! and Mississippi Damned showcase the model’s ability
to generate fully faithful rewrites when supplied with complete source material. In the
former, the LLM subtly enriches the synopsis by echoing critic observations. It adds tone
and style drawn from the reviews but does not stray beyond the facts. While its
paraphrasing flair results in only about half the sentences passing a strict entailment
check, the output remains grounded.
In the case of Mississippi Damned, the model faithfully conveys every plot detail –
Mabry’s personal backstory, the Tupelo setting, the principal cast – while rephrasing each
element in fresh, evocative language. This confirms that robust, informative inputs allow
the LLM to avoid hallucination entirely, even with low surface-level overlap.
5.7.​ User Tests
In our single user study (N = 33 individual synopsis evaluations), just over half of the
personalized synopses (54.5 %) convinced participants they would watch the movie. This
moderate “would watch” rate aligns with the midpoint average satisfaction (Match = 3.12
± 1.05) and engagement ratings (Engagement = 2.92 ± 1.18), underscoring that while
some rewrites resonated, many still fell short of compelling viewers. The fact that nearly
half of outputs did not spur viewing intent highlights both the promise and the currentHuman-Machine Interaction in AI-Applications: Approaches to Intelligent and Context-Aware Systems –
76
limits of generic LLM‐driven personalization. In practice, this suggests that further
targeted tuning, whether through richer persona prompts or post‐generation curation, will
be necessary to boost persuasive power.
Participants’ free‐form feedback converged on several clear pain points: the rewrites
often felt overly literal and generic, leaning on obvious phrasing rather than offering fresh
or nuanced takes; at times key plot elements were omitted, leaving users wanting more
context; and the verbose, meandering style didn’t match their expectations for a succinct,
engaging blurb. While some users appreciated the novelty of certain turns of phrase, they
also noted gaps in coverage, likely a symptom of uneven input data and stubbed‐out
persona cues. These observations mirror our quantitative findings: high sentence‐level
fidelity but low surface overlap (low BERTScore and global entailment), together with
mid-range engagement ratings. In practice, this means future iterations should focus not
only on tightening factual grounding but also on crafting prompts (or post-processing
rules) that enforce completeness, concision, and stylistic resonance with the intended
persona.
5.8.​ Recommender Engine Qualitative Assessment
The underlying content-based recommender system was validated qualitatively during
development. For all tested cases, the retrieved top-N recommendations consistently
matched the genre of the input movie and exhibited strong semantic similarity, often
suggesting titles with closely related narrative structures. Due to the lack of explicit user
interaction data (e.g., ratings, click logs), no standard ranking metrics such as
Precision@K or NDCG were applicable. As the project’s primary objective centered on
personalized content generation rather than ranking optimization, no further quantitative
evaluation of recommendation precision was conducted. The content-based engine was
therefore considered sufficient to serve as a reliable upstream component for the
personalization layer.
5.9.​ Limitations
Despite providing a broad, low-cost diagnostic of LLM-driven personalization, our study
is subject to several important constraints. First, our simulated metrics rely on fixedHuman-Machine Interaction in AI-Applications: Approaches to Intelligent and Context-Aware Systems –
77
heuristics: five QA questions per direction, top-5 TF-IDF sentences for entailment, and
off-the-shelf distilled models, which were selected for runtime efficiency rather than
optimized for faithfulness accuracy. These settings, along with CPU-only inference, may
under- or overestimate true hallucination and entailment rates. Second, input quality
varied widely: roughly 17 % of titles had thin or missing studio synopses, forcing the
model to hallucinate from reviews or its internal priors in ways that a properly grounded
system would avoid. Third, our baseline-steering persona integration only passed genre
and recent-watch metadata, leaving deep tone/style cues unset; as a result, we measured
generic rewrite behavior rather than true persona alignment. Fourth, the user study, while
valuable for gauging perceived match and engagement, was limited to 33 total
evaluations without counterbalanced conditions, so individual preferences and context
may have influenced ratings. Fifth, Several of the observed system behaviors can be
traced back not only to model limitations, but to structural features of the underlying
dataset. For example, the EDA revealed a strong skew toward positive sentiment and
disproportionately long synopses in drama and romance genres, which likely influenced
both the baseline tone and the factuality of LLM rewrites. These imbalances may have
amplified the appearance of positivity bias while simultaneously constraining the model’s
grounding ability in underrepresented or sparsely annotated genres. As such, some
limitations observed in user alignment or hallucination rates should be interpreted as
entangled with dataset artifacts, not solely model behavior. This underscores the
importance of dataset design and preprocessing in evaluating LLM-personalized
pipelines. Finally, our focus on descriptive and goal-driven statistics (ANOVA,
Kruskal–Wallis, regression) means that many effect sizes were small, limiting practical
implications. Together, these constraints suggest that our findings should be seen as an
exploratory baseline, to be refined with richer persona prompts, retrieval-grounded
generation, human annotation benchmarks, and systematic tuning of evaluation heuristics.Human-Machine Interaction in AI-Applications: Approaches to Intelligent and Context-Aware Systems –
78
6.​ Conclusion
This thesis set out to answer the question:
Can LLMs be used within movie recommender systems to rewrite item
descriptions in a tone and style aligned with individual user preferences,
while preserving factual accuracy and minimizing positivity bias, as
evaluated post hoc?
We tried achieving three goals:
1.​ G1: Users will rate LLM‐personalized synopses as well‐aligned with their stated
preferences in tone, genre, and style.​
– Finding: User ratings averaged only around the midpoint (Match ≈ 3.1/5), and
“would‐watch” intent was ~ 54 %. Persona tests showed no statistical difference
under our baseline steering. H1 is only weakly supported – participants found
some rewrites appealing, but overall alignment remained modest.​
2.​ G2: Personalized synopses will maintain core factual elements of the original
descriptions.​
– Finding: In zero‐hallucination cases, QA‐consistency and sentence‐level
entailment were very high, confirming perfect fact retention given adequate
synopses. Yet across the board, mean hallucination was 0.45, pulsating to 1.0
whenever inputs were sparse. H2 holds only when grounding is sufficient;
otherwise, invented content is rampant.​
3.​ G3: Personalized synopses will avoid introducing unintended positivity bias.​
– Finding: We observed a large positivity shift (mean Δsentiment ≈ +0.29,
Cohen’s d ≈ 0.97). Moreover, this cheerfulness was uncorrelated with factualHuman-Machine Interaction in AI-Applications: Approaches to Intelligent and Context-Aware Systems –
79
errors, meaning positivity bias is orthogonal to grounding. H3 is not supported,
LLM personalization systematically upsold every synopsis.​
Overall, LLMs can produce fluent, fact-preserving paraphrases when given strong source
material, but they are prone to inventing content on thin inputs and to “over-cheer”
everything. Persona‐level style change did not emerge under minimal steering, and raw
user satisfaction remained middling.
Implications & Future Work
Our findings that the LLM can fluidly paraphrase core plot points while simultaneously
inventing up to half its content and steeply uplifting sentiment reveal two orthogonal
dimensions that any production system must tackle separately: factual grounding and tone
control. In practice, this means we can treat hallucination mitigation and sentiment
calibration as distinct modules. For factual grounding, one could integrate a lightweight
RAG pipeline: before each generation, retrieve the top‐k factual sentences from a
mini‐index of the studio synopsis (or a trusted knowledge base), then prompt the LLM to
only rewrite those retrieved snippets. Alternatively, a simple post‐generation entailment
filter could excise or flag any sentence whose local NLI probability falls below a
threshold. To realize truly persona-aligned, reliable synopses, the next steps include:
-​ Retrieval‐Augmented Grounding to reduce hallucinations on sparse inputs.
-​ Explicit Persona Prompts (tone/style/likes/avoid) to drive genuine
customization.
-​ Sentiment‐Regularized Decoding or post-filters to clamp positivity.
-​ Human‐in‐the-Loop Evaluation for fine-grained judgments on style and trust.