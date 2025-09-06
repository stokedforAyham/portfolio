I. Introduction
1. Research Background
Recommender systems (RSS) are tools and methods used to present users with suggestions for anitem they are seeking (Ricci et al., 2022). These suggestions help the user arrive at the most
relevant information they need to complete their journey. The more information-dense
applications
get, the more need there is to use techniques such as RSS to sort through this information to make
it more accessible. The process of sorting through is also known as data mining. Data mining is
one of the important analysis techniques that RSS use to help construct filters (Mohamed et al.,
2019). These filters may vary in their architecture and objective, but the overall process aims to
make items that are most relevant to the user more visible, which allows for an overall enhanced
user experience. RSS can for example be used as a tool to persuade users to consider a desirable
outcome (Jesse & Jannach, 2021a; Sánchez-Corcuera et al., 2020b).
The study of computers as a technology that can be used to persuade is called "captology" or
"persuasive computing" (B. J. Fogg, 1998a). This technology -that is not always limited to
computers- can be seen as a social actor that can influence human behavior to achieve a desired
outcome (B. J. Fogg, 2003). Furthermore, captology includes the design and analysis of this
technology and the exploration of theories and frameworks from other domains such as psychology,
marketing and rhetoric (B. Fogg et al., 1998).
Tourism is one domain where computer technologies have become an essential building block and
even a necessity for the thriving of the field. Tourism has seen a rise in the use of artificial
intelligence (AI) applications that have expanded the horizon for new advancements within the
field (Samala et al., 2020). However, the amount of information that is to be found online today
has made it challenging to communicate the best options to the tourist (Fararni et al., 2021). This
is where tourism can benefit greatly from RSS and where successful integration thereof can help
tourists navigate and explore a huge range of destinations.7
This research will review state-of-the-art RSS as well as persuasive technologies that are most
relevant for building a system that helps users navigate information of cultural significance within
the context of tourism. Additionally, we conceptualize a hybrid RS that employs different
captology techniques to benefit from keeping the user engaged. Finally, we will design use cases
to engage the system in quantitive and qualitative
tests.
2. Problem Statement
The massive amount of data that is available today has allowed for new business and research
opportunities as well as challenges in storing, processing and analyzing this data. These massive
data sets that are also of varied and complex structure are known as Big Data (Sagiroglu & Sinanc,
2013). Big Data has allowed for a growing demand for smart tourism which has challenged many
aspects of the industry's traditional means. This growth in demand as well as the augmentation of
data has of course led to new challenges (Ardito et al., 2019). One of the challenges is making
sense of the data and finding purposeful means to navigate it. RSS are being employed to tackle
certain aspects of information retrieval, filtering and personalization when mining data.
However,
depending on the level of personalization, these systems could require extensive design in
order to
offer the user deliberate results. Advances in the design of such systems have been mainly
made
within an industrial and commercial setting that are not necessarily as successful within an
educational or a cultural setting. RSS that have been adopted in the cultural sector are
ill-equipped
with research that is easy to find in literature, therefore lack an overview of the grand scheme (Dam& Dinh, 2020).
In order to understand user preferences towards the items that are being provided by the system,
traditional RSS analyze the user's behavior data offline, e.g., click history, ratings on items, etc.
This data is first made available when the user starts engaging with the system. In most cases, this
lack of data at the beginning hinders a successful deployment of the RS –this is referred to as the
"cold-start problem". Multiple solutions have been proposed to tackle this; many of which
consider
a hybrid system of combined recommendation techniques. For example (Fararni et al., 2021)
suggests including demographic data about the user when constructing user profiles. The
approaches to collecting such missing information vary but can overall be classified into either an
8
explicit or an implicit solution, according to (Gope & Jain, 2017). Moreover, the classified
approaches in (Gope & Jain, 2017) suggest a more desirable outcome if the solution was rather
personalized when eliciting user preferences, however, traditional RSS struggle to actively learn
from the user's feedback, which is essential for enhancing personalization. This can be
compensated for by integrating more dynamic RS techniques such as conversational RSS (Gao et
al., 2021a).
Beside building a system that can from a technical perspective interact with the user to obtain their
feedback, the system should also know how to keep the user engaged in order to successfully
complete an interaction and yield the intended results. Keeping the user engaged could be achieved
in various ways, in (Eyal, 2019) a proposed system of digital nudges and persuasive computing
mechanisms enables the user to form habits that incentivize them to interact in recurring cycles.
Such persuasive methods can be integrated into the architecture of an RS at multiple stages either
to influence the output of the process and achieve results beyond the system (Jesse & Jannach,2021a; Wu et al., 2018), or perhaps to influence the process itself and achieve more efficient
systems that would benefit the user at the output level.
With an RS that finds ways to persuade its users to participate in the process of making
personalized recommendations and with the intent of deploying such a system in the tourism
sector, we expect both the user (tourist in this case) and the tourism service provider to benefit
from such system.
3. Objectives
The research conducted in this thesis aims to conceptualize an RS for tourism that would achieve
enhanced personalization and solve the so called cold-start problem by involving the user in the
recommendation process. By that proposition, the following research question should be answered:
How can persuasive computing techniques be exploited to build an RS that can overcome the
cold-
start problem and achieve a good level of personalization within the context of tourism.
9
II.
Literature Review
The first part of this chapter will discuss the latest AI-technologies and trends in the tourism
sector
and highlight the significance of developing an RS for the sector. The second part discusses
persuasive computing techniques such as digital nudges and strategies for building
habit-forming
products. The last part explores the different types of RSS and state-of-the-art research on topics
such as persuasive RSS and personalization.1. Tourism and Al Technologies
AI along with robotics, quantum computing, nanotechnology and the internet-of-things, is one of
the main fields that characterizes what is now considered the fourth industrial revolution. Tourism
is of course one of the sectors impacted by these advances as it faces more demand for automation
(Tussyadiah, 2020). In the following section topics such as the state of AI from a cultural
perspective, general applications of AI in tourism, traveler's openness for new technologies, the
importance of personalization, a brief note on the state of RSS in tourism, and lastly, understanding
the traveler and their decision-making process.
1.1.
Al in the Cultural Sector
As more exploration in the field of AI is made, more applications there are to offer. These
applications have been serving various purposes in the field of tourism, such providing
recommendations, interacting with customers and offering a personalized journey. This growth
was mainly the result of the increasing availability of large amounts of data and technologies that
has enabled engineers to make use of this data. Data that provides a wide range of information on
topics that are of key importance to the field of tourism. Multiple surveys as cited in (Samala et
al., 2020) show that a large percentage of tourism service providers already use AI in their business.
For example, one survey done by Tata Consultancy Services (TCS) concluded that 85% of service
providers in tourism use AI in their business. The demand for technological solutions is also there,
as found by Google Travel & Trip Advisor, 74% of travelers plan their trips using the internet
(Samala et al., 2020).
10
In recent investigation published by the European CULT committee on artificial intelligence in thecultural and creative sectors, light has been shed on the importance of integrating smart
technologies such as various AI applications into the sector to make use of the data that has seen
steady growth in size and availability. Part of the investigation focuses on ways to engage people
in a rich experience when exploring European cultural heritage and suggests that systems that
improve accessibility to cultural content aren't yet up to par as there are only a few initiatives to
begin with. The investigation also poses some open questions that ask how we can use AI to make
cultural content more accessible and how can it promote cultural diversity in the process. This
draws attention to understanding the powers of AI that can help build a healthy user
engagement
rather than using AI to just solve technological issues. (Policies, 2020)
1.2.
General Al Applications in Tourism
The automation provided by technologies, such as AI, can assist in the pre-trip stage providing
suggestions and inspiration, as well as providing a way to search for information, to book trips and
hotels, and other pre-trip experiences. Service providers also benefit from such technologies that
help them understand their customers better and become increasingly able to create a greater global
reach and design more personalized experiences. Allowing for marketing automation that relies
on predictive analysis and personalization engines that deal with customer data more informatively.
Furthermore, with the help of applications such as text-to-speech where language is generated as
well as translated, a more global audience can be reached. These applications of natural
language
transformation can be used in user interfaces that enable an ongoing dialogue, facilitate path-to-
purchase and provide an overall guidance when using a service provider's platform. (Tussyadiah,
2020)
1.3.Travelers' Openness for New
Technology
As more and more travelers resort to technologies that aid and facilitate their travel, we need to
have a better understanding of both the technology and the traveler's perception of it. In some
examples, the traveler may prefer technologies that help assist at the time of their travel rather than
before the travel. In addition, (S. H. Ivanov et al., 2017; S. Ivanov & Webster, 2017) found that
there is a preference for self-service technologies over traditional services. On the other hand,
11
understanding such technologies means knowing what technologies are available and conducting
research on each specific one. This thesis, however, will dig deeper into one specific technology:
RSs.
1.4.
A Brief Look at Recommender Systems
RSS are gaining popularity in tourism because they serve as a tourism guide for planning a trip,
making use of constraints imposed by the user. RSS have the same objective as that of a human
guide, which is to understand the traveler and their preference and make travel recommendations
accordingly. This interaction between the RS and the user intends to quantify how much the user
likes an item and predicts a list of items that a user is most likely to buy. Several RSS were
developed for tourism with the goal of designing dynamic recommendations that make use of
certain information, like user preference, geolocation, weather condition, demographics, item
ratings, within the context of travel and sightseeing. (Sarkar et al., 2022)
1.5.
Importance of
Personalization
Personalization in tourism on a high level in the context of e.g., smart cities, is the service that
understands your geolocation and augments your experience accordingly with smart computingthat provides instant information and optimized reach at the right time and location of the visit. A
robust system like that will also have to consider the diverse nature of its users and their
requirements and needs in different situations. (D'Amico et al., 2013). Personalization can also
serve an increase in user loyalty by making the user interface of a website more appealing and
personal (Martínez-González & Álvarez-Albelo, 2021).
1.6.
Understanding the
Traveler
Now more than ever, and as due to the COVID-19 pandemic, travelers are resorting to the internet
to seek information as part of their travel planning efforts. This embrace of technology also
holds
true for the supply side, where service providers have adopted the internet as their main
communication channel. It was found that using a website for promotion purposes has a significant
impact, especially websites that are based on the USG (user-generated content) model, where users
are contributors to the information system. The USG model, also known as website 2.0, is
12
especially relevant as the tourism sector is becoming an information-laden industry (Lemy et al.,
2021). It is important to observe that tourism as a phenomenon comes with a set of unique features
and characteristics that make it complex to measure. In other words, it is difficult to obtain
timely
knowledge about the tourism sector, as the influence of a rapidly changing society and consumer
behavior makes it ever more challenging. The internet, however, has proven to be an effective tool
-as demonstrated by the results of a Google trend- for determining potential travelers' interests
and intentions. (Dinis et al., 2016)
With the evermore increasing accessibility to information, along with tourists' interest in online
content, and willingness to share information on social media, a better understanding of touristbehavior is becoming more viable. For example, in smart tourism an individual is portrayed as
an
information maker that is responsible for refining their own destination option simultaneously as
their location updates. Tourists, residents, service providers and destinations are part of the
heterogeneous interconnectivity that makes up the digital ecosystem in a smart city, while also
benefiting smart tourism. Involving different actors in contributing to the smartness of a city,
where technological solutions are the ground for decision-making, is crucial for responsible, smart,
and sustainable management of tourism. (Encalada et al., 2017)
1.7.
Traveler's Decision-Making
Models
Theories of choice behavior in humans are used to synthesize models that fit certain areas of
research on decision-making. Empirical research on consumer behavior suggests that both social
and physical environments play a role in the consumer's evaluation of the alternatives these
environments offer (Chen, 1998).
One model suggests distinguishing between two decision making systems depending on the level
of involvement of the traveler in the decision-making process. As seen in figure 1, decisions
made
in system 1 are heuristic, emotional, intuitive, rapid and requiring less effort; this means that the
traveler is less involved in the decision-making process. On the other hand, system 2 has a higher
level of involvement, where the decision is linked to rational reasoning, is complex and
requires
more effort. The level of involvement here is what triggers the use of the different systems
(McCabe et al., 2016).
13Destination
Options
Tourist
Level of
Involvement
System 1:
Heuristic,
Emotional,
automatic, less
effort
Low
High
High
Destination
Selection
System 2:
Systematic,
Rational, Complex)
Information
Search
Cognitive
Low
reasoning, more
Overload
System
Complex
Evaluation
effort
Figure 1 (General model of tourism decision making)Destination choice was used in the model as an example. In a low involvement situation, different
types of heuristics could be used. One type is based on recognition. If the traveler recognizes an
alternative, it may be valued higher and therefore expected to be the selected option. Familiarity
makes the decision-making process easier, as travelers may select or reject known destinations
easily. Another type of heuristics are social heuristics. These heuristics include imitating the
majority, imitating the successful or averaging the judgements of others. Social heuristics are
helpful especially if the traveler knows too little information about the destination. (Gigerenzer &
Gaissmaier, 2011; Hertwig & Herzog, 2009; McCabe et al., 2016).
In a high involvement situation, travelers are likely to search for information using system 2.
However, the cognitive load encountered while searching for information is an important factor
that might divert the traveler into system 1. If the perceived cognitive load is acceptable, the
traveler may keep processing the information analytically and undertake complex evaluation. If
the perceived cognitive load is high, the traveler may resort to simplifying the information they
need to decide. Cognitive load may vary among individuals depending on their resources such as
level of motivation or ability to process certain information. Additionally, it may depend on the
individual's demographics, for example, for old people, engaging in searches that require high
14
involvement may be beyond their ability. (Ferreira et al., 2006; Klauer et al., 2000; McCabe et al.,
2016; Petty & Wegener, 1999)
In situations characterized by massive information availability, a high number of travelers may
lack skills, time or motivation to use system 2. In these situations, heuristics such as the
lexicographic heuristic or the trade-off heuristic can be expected. The lexicographic heuristic
means that the traveler will consider the most important attribute of the destination under certainconstraints such as time limits or budget. Evaluation under the trade-off heuristic involves an
increased cognitive effort. The choice process assesses the number of attributes in each alternative
and leads to choosing the one with the highest number. (Gigerenzer & Gaissmaier, 2011; McCabe
et al., 2016)
2. Persuasive Computing
Captology or persuasive computing, is a term used to describe computer technologies that are
interactive and have influence on the user's attitude or behavior (B. J. Fogg, 1998b). These
technologies can have many forms but are mainly integrated into the interface of the system. This
section will discuss two applications of persuasive technologies. The first one is digital nudges
which, as the name implies, attempt to push the user in a particular direction in order to result in a
desired outcome. The second discussion is about using digital nudges along with other techniques
in order to form a habit in the user's behavior around the system. This newly acquired habit is what
will keep the user asking for more interaction.
2.1.
Digital
Nudging
People don't always make rational decisions-although they are constantly required to-their
decisions are influenced by various heuristics and biases. Choice environments play an
important
role in influencing the outcome of these decisions. Digital choice environments are user interfaces
in which users are required to make judgements or decisions. The way information is
presented in
choice environments can influence the course of the user's journey, which is an example of digital
nudging. As a matter of fact, there is no neutral way to present choices. Digital nudging intends to15
guide the user's decision-making behavior through deliberate design of user-interface elements.
Understanding the influence of digital nudges gives the system designer the opportunity to present
the user with the most desirable outcome. (Lehner et al., 2016; Schaer & Stanoevska-Slabeva,
2019)
The ubiquitous use of technologies in almost every area in the lives of private individuals and
professionals means that people are frequently making decisions within digital choice
environments. Whether within the realm of e-commerce or e-government, people are interacting
with interfaces to complete an objective. A faulty interface may lead to unintended consequences
that may result in user dissatisfaction; therefore, it is important for designers of such choice
environments to understand the invisible factors that influence the user's decision-making. Digital
nudges can give the designer a certain amount of control over these factors. For example, digital
nudges used in a fitness tracker activity monitor can be used to promote health by nudging the
user
into increasing their activity levels. (Jesse & Jannach, 2021b; Lehner et al., 2016; Weinmann et
al., 2016)
2.2.
The Hooked Model
In this section, the model that is being discussed is derived from the book Hooked (Eyal, 2019).
Seventy-nine percent of people who own smartphones check their devices within 15 minutes of
waking up. While being attached in this extreme manner is mostly found in users of social media
services such as YouTube, Twitter, Facebook, etc., the psychology behind the cause remains the
same in any product that is designed to form habits in its users.
In (Eyal, 2019), a framework that the author calls The Hooked Model was designed to connect theuser's problem with the designer's solution frequently enough that it becomes a habit. The
repetitive cycles, or what the author calls hooks, enable better communication of the user's needs
and sets out to fulfil them. As the user becomes more involved, their engagement increases, and
their preferences become clearer. These hooks are intended to make users engage with the
product
unprompted, bringing them back repeatedly without aggressive messaging. As seen in figure 2,
the model is made up of four steps: trigger, action, variable reward, and investment.
16
Trigger
Action
Variable
Investment
Reward
Figure 2 (The Hooked Model)
Trigger:A trigger is what provokes human behavior. Triggers could be either external or internal. A habit-
forming product starts with external triggers that happen in the environment of the user, like
receiving an e-mail or a link to a website. These triggers carry information that tells the user
what
to do next. For example, a prominent log-in button on a website delivers a clear message on
what
action should be taken. On the other hand, internal triggers are not tangible, but are rather
embedded in the mind of the user that will manifest automatically once a habit is established.
Triggers are a call for action.
Action:
Actions are the behavior done in anticipation of a reward. Actions can manifest in engaging with
the website by clicking on its interactive elements, all the way to completing a purchase.
Triggers
17
need to be successful in cuing actions in users, but actions should be easier to do than to think
about. The more effort required to complete an action, the less likely it is to happen. In the success
of action, rewarding the user is expected.
Variable Reward:
Rewards should have an element of surprise that creates a craving for being rewarded again and
again. Reducing the effort needed to complete an action will make that action more likely to
happen. However, that is not yet enough to keep the user engaged. The motivation that led to
performing an action should be reinforced by rewarding the user with the solution they are
looking
for. This can be as simple as showing them the picture they are expecting or providing the
contentthey are interested in and keeping them curious for more. The user should be happy to invest in
the
product.
Investment:
This phase aims to make the user take another pass through the cycle in the future. The user is now
expected to do a little work on their side. The investment is successful in that the user puts
something into the product such as time, money, data, effort or social and emotional capital. It
isn't always about monetary investments, as even in e-commerce it is important to have the users
invest in various ways in the product. These investments can be something like inviting friends to
use the product, stating preferences, learning to use new features. This can make the triggers more
engaging and something that the user will look forward to.
The author discusses further, that in order to create a habit, the user must have gone through
multiple cycles of The Hoked Model. Eventually, the user will engage anew in the cycle
through
cues of internal triggers. It is important to make sure these cues are obvious in the beginning if
needed, which can be done through embedding external triggers into the system. Users will set
their psychological associations with the internal triggers in the investment phase, providing habit-
forming technologies with an opportunity to leverage the user's past behavior to cause more
engagement.
18
3. Recommender Systems
In this section types of RSS are discussed as well as the idea of personalizing recommendations
and the cold-start problem.3.1.
Types of Recommender Systems
Traditionally RSs fall into three main types, content-based RSS, collaborative-based RSS and
hybrid RSS. However, due to the growing complexity of the areas it is being applied to, RSS are
being designed with more suitable application types for the specificality of the case they are
catering to. The following section introduces several filtering techniques that are deemed relevant
to the purpose of this
thesis.
3.1.1. Content-Based Filtering
In content-based filtering the user will be recommended items similar to the ones the user has
given positive feedback to in the past. The system stores the items in different item profiles
based
on their description or features. When a user gives a positive rating to an item, the other items
present in that item profile are clustered together to build a user profile. These items are now part
of the user profile from which the system draws further recommendations. One downside of this
technique is that an equal in-depth description among items is required for an accurate
recommendation, however, the technique has its advantages in its dynamic ability to adapt to
changing user preferences. Additionally, the process doesn't require the preferences of other users
to make recommendations; this -besides having sufficient item description- is especially useful as
it enables the system to overcome the cold-start problem. This means that the system can function
even without the need for an item to have been rated by other users. Nevertheless, the system will
require the user to have rated enough items to be able to make sense of their preference profile;
this is called the new user problem. (Roy & Dutta,
2022)3.1.2. Collaborative Filtering
Collaborative filtering requires the ratings of an item from other users to be able to generate
recommendations based on a similarity metric among the users. This is essential as the user will be
recommended items that other users with similar preferences liked in the past. The accuracy of
19
this technique depends on how accurately the algorithm can find the neighboring users of the target
user. Compared to content-based filtering, this technique doesn't require item description and
features to make recommendations, however, this is where the cold-start problem is to be
expected,
as in a new environment there aren't enough rated items to feed into the algorithm. (Roy & Dutta,
2022)
3.1.3. Hybrid-Based Filtering
Hybrid systems combine two or more recommendation techniques to help minimize the drawbacks
of a particular system. Most commonly, collaborative filtering is combined with some other
technique to eliminate the cold-start problem (Waterloo, 2000). This incorporation of various
techniques generally results in enhanced performance and increased accuracy. Hybridization is
approached differently depending on what the system is expected to achieve. Some of these
approaches are explained below. (Roy & Dutta, 2022; Waterloo, 2000)
Weighted: combines results from all the recommendation techniques of the system. This
could start by giving the scores of both techniques equal weight and gradually adjusting
the weighting as these scores get confirmed or disconfirmed.
• Switching: this method builds on a criterion that dictates when to switch between
techniques. The selection criterion could be based on user profile or other features.•
Mixed: the resulting recommendations from several techniques are presented
simultaneously.
•
Feature combination: here the results from an additional technique are treated as a feature
that pours into the main recommendation
technique.
Cascade: unlike the aforementioned methods, the cascade hybrid puts the results from one
recommendation technique into a second technique for refinement. This method
differentiates between primary and secondary recommendation systems. The first applied
20
system is considered primary, and the results will determine whether additional
discrimination through the secondary system is needed.
Feature augmentation: Instead of combining features that are made up of initial raw data,
feature augmentation includes the features of the first system into the features of the second
system.
•
Meta-level: whereby in feature augmentation the generated features from the first system
are used as input in the second system; in a meta-hybrid, the entire model is used as an
input.
3.1.4. Knowledge-Based Filtering
Knowledge-based filtering uses knowledge about the users and products to reason what
productsmeet the user's requirements in order to produce a recommendation. This offers a solution to some
drawbacks of traditional filtering as the judgments in this system are made independent of the
user's tastes. The judgments made by the system are in fact a result of specific queries made by
the user; rather than a result of the user's ratings of an item. These queries are prompted by the
system and may look like filters that can be adjusted by the user in order to arrive at a narrower
selection of items (Burke, 2013). This is also known as constraint-based RS where the constraints
are drawn from the knowledge base that the system has elicited from the user. If the constraints
have left the system with no items to recommend, then a set of alternative items that are similar to
the preferred item are recommended (Singh et al., 2021). A semantic approach can also be
used to
help establish a knowledge base of users and items. A common characteristic in most semantic
RSS is the use of profiles to represent the user's preferences (Peis et al., 2008).
3.1.5. Conversational RSS
Traditional RSS that rely on analyzing past behaviors offline e.g., click history, visit log, ratings
on an item, are called static recommendation methods. These systems have the disadvantage of
failing to understand what exactly a user likes, and why does a user like an item. A basic
assumption of static models is that all historical user interactions, which may be sparse and noisy,
21
represent their true preference. This can raise accuracy issues. The user might have made the wrong
decision giving good ratings to an item they don't really like or don't like anymore. Another issue
is understanding the true motive behind the choices made. The user may choose an item for the
sake of trying it out or because they were influenced by consumers. It may also be the outcome of
a well-informed decision. It is difficult for a static model to disentangle the different reasons behind
the user's choices. (Gao et al., 2021b)Conversational RSS could approach these issues by, as in example, building rapport between
the
user and the system. These interactions would look similar to interactions between human
recommenders and users, rolled out in two phases: Interview and Delivery. The interview phase is
where the system would query the user about their preferences. After enough information has been
gathered, the system would then deliver recommendations accordingly. The system would expect
a reaction from the user. This reaction can have many forms. For example, the user may find that
their previous preference didn't yield desired results and would like to adjust that preference. The
user may want to see further similar items as to what has been suggested, etc. Another method of
overcoming static RS issues is a system that optimizes the interview by collecting data about the
user beforehand, which reduces the questions that the system needs to ask in order to produce
relevant recommendations. A further approach is to apply reinforcement learning to make the
interview smarter each time. (Christakopoulou et al., 2016; Nunes & Jannach, 2017; Pecune et al.,
2022; Tintarev et al., n.d.; Wärnestål et al., n.d.).
3.1.6. Context-Aware Recommender Systems
(CARS)
Contextual information like time, location, mood, activities on social media, weather conditions,
etc., can define a context. Contextual information is subject to dynamic change. Mobile
applications play a significant role in CARS as they allow for contextual information to update as
the surroundings of the user take effect (Singh et al., 2021). It was suggested that these systems
would follow either one of the following
approaches:
Contextual Pre-Filtering: this applies parameters of contextual nature on the item's list
before applying the recommendation model.22
Contextual Post-Filtering: this approach applies its parameters after the recommendation
processing is completed.
Contextual modelling: here the parameters are integrated into the recommendation
process
itself.
CARS are especially helpful in the domain of tourism as they help with the personalization of
recommendations. CARS in tourism processes contextual information that consists mainly of user
(tourist), item (destination), time, activities and weather conditions. (Bentaleb et al., 2018; Singh
et al., 2021)
3.1.7. Persuasive Recommender Systems
Research on RSS has focused on developing paradigms that would recommend items to users
rather than trying to persuade users to get those items. However, there have been recent attempts
in literature exploring the possibility of integrating persuasive features into the RS in order to
enrich recommendations. As is evidenced, providing accurate recommendations is not enough to
increase the user's acceptance of the system. This has engaged researchers in finding new
paradigms that would make RSS more interactive, influential and persuasive. Several examples
already exist in several recommendation areas, such as an RS that nudges the users towards
following particular routes (cite), the use of explanation and argumentation to persuade in the
context of Educational RSS (cite), and health RSS where users are persuaded to reconsiders their
unhealthy habits and be encouraged into rather healthy ones (cite). (Alslaity, Alaa).
Systems like the GreenCommute indulge the users with rewards if they steer in the desired
direction. The system persuades its users to take public-friendly commute options, resulting in apositive impact on the environment as traffic pollution, congestion and accidents are reduced. In
this system users are expected to influence each other. The reward is when the user feels
satisfaction from seeing that their choices have made a positive impact, which in turn would
influence their as well as other user's decisions and persuade them to adopt good behavior (cite
GreenCommute).
23
Other systems that have made use of persuasion techniques in order to yield positive impact on
certain issues, were also able to resolve inherited RS problems such as the cold-start problem.
Approaching the user with several RSs that constantly filter the items until they reach the final
recommendation, in order to avoid recommending items that will not be relevant to the user.
(Sánchez-Corcuera et al., 2020a)
3.2.
Recommender Systems in Tourism
There are many ways to approach recommendations, especially when dealing with a topic of
heterogeneous nature such as tourism. Besides traditional RSS (collaborative and content-based
filters), research has used social information and contextual information in addition to ratings to
make user profiles richer in data. Diversifying the sources of data in a user profile makes
recommendations more situation specific and dynamic. In artificial intelligence, user profiling is
carried out by the system rather than by explicit user involvement. The user profile, consisting of
demographic, contextual, preferences, ratings, and so on, will enable the system to help to
plan a
trip depending on estimated level of appreciation towards e.g., locations, attractions and activities.
In order to get recommendations based on various sources of information, hybridization of the
system and aggregation of the recommendations generated from multiple recommenders is a viableoption. (Fararni et al., 2021; Logesh et al., 2019; Sarkar et al., 2022)
3.3.
Personalization with Recommender Systems
Improving the accuracy of ratings prediction does not always result in better user experience. RSS
are to help users in their decision-making process, therefore, assessing the system from a user-
centric perspective (e.g., decision confidence and system satisfaction) provides a better
judgment
on the system's quality. A good understanding of the user's personality and the modeling
thereof
can lead to more personalized recommendations. Users with different personalities can be more or
less inclined to choose novel items, so adjusting the recommendations accordingly can make them
more personal. Several studies have shown that there is a strong relation between a user's
personality and their preferences, and that these relations are domain dependent.
24
Personality-based RSS deploy techniques that can be generally grouped into explicit and implicit
techniques. Explicit techniques call for direct feedback from the user, such as prompting the user
with questionnaires or conducting small interviews. While they provide an accurate
assessment of
the user's personality and preferences, they are intrusive and time consuming. Implicit techniques,
on the other hand, gather relevant information about the user's personality and preferences in an
unobtrusive way; inferred from the user's interactions with the system. (Jawaheer et al., 2014;
Tkalcic & Chen, 2015)
3.4.
The Cold-Start ProblemMany challenges that RSS face, like data sparsity, shilling attacks, latency problem, cold-start
problem etc., make it hard for RSS to function as intended. The so called cold-start problem is a
key challenge that is better resolved at an early stage of system design. The RS will struggle to
make relevant recommendations to users due to a lack of adequate information about them. This
unavailability of adequate information could either be due to the novelty of users or the novelty of
items. Out of the two causes to the cold-start problem, the new user cold-start problem has been
more researched as it is the more difficult issue to resolve. (Gope & Jain, 2017; Roy & Dutta,
2022)
The proposed solutions approach the problem by facilitating ways to collect this unavailable
information. This is done by either explicitly querying the user or by doing so implicitly. Two
popular tactics were developed in order to explicitly collect relevant user information without
overwhelming the user:
-
Active Learning
(AL):
Active learning is a useful technique for selecting a set of items that will be presented to the user
in order to perform a preference assessment. The set of items presented is minimal and
relevant so
as not to overwhelm the user. In AL, the system learns from the user's feedback and adapts its
training data accordingly. The set of items is selected either in a non-personalized, or in a
personalized fashion. Non-personalized AL presents the same single list of items to all users for
rating elicitation. This technique is simple to implement but it helps understand the preferences of
an average user only; as they elicit common preferences for all users. While personalized AL
25
provides different lists to different users, the items in the list are adjusted according to
individualuser feedback. To make the interaction of the elicitation process more engaging for the user, the
system may integrate conversational RS techniques.
Interview Based Approaches:
Users are presented with one or multiple items from a set of items and are asked for their opinion,
the item list is adapted based on the user's response following a decision tree model. The strategies
for selecting items generally have a trade-off between information accuracy and user effort. An
example of the interview approach is the functional matrix factorization (fMF). The fMF
constructs a decision tree for the initial interview with each node being an interview question,
enabling the recommender to query the user adaptively according to their prior responses.
With
each node the user profile is reconstructed as a refining
process.
Further tactics that collect information implicitly survey existing information about the user, like
their demographics, social media activities, browsing history, interactions with the system, etc.
(Gope & Jain, 2017; Nadimi-Shahraki & Bahadorpour, 2014; Zhou et al., 2011)
III. Methodology
The research design of this thesis is conceptual. The RS that will be conceptualized in this section
will borrow from persuasive computing concepts and design and make it an essential part of its
architecture in order to find a solution to the cold-start problem and to achieve an overall enhanced
personalization of its recommendations. Furthermore, the RS will build on existing concepts of
basic RS design while examining more expert systems such as conversational, knowledge-based
and context-aware RSS. The aim of the examination is to find the proper candidate(s) -that will beintegrated entirely or partly into the overall hybrid system architecture- which will allow for
deliberate implementation of persuasive elements. The goal of developing a new concept
here is
to offer a potentially new perspective on the topic, which is achieved by relating and
completing
certain missing pieces in a novel way. The design will focus on explicating and justifying the
chosen theories and concepts, as well as explicating the role these theories and concepts play in
26
the analysis. Although this might allow for identifying potential gaps, the main purpose here is
to
provide an enhanced understanding of identified phenomenon and to underscore advantageous
commonalities across the discussed literature.
Persuasive design is the driving force behind the decisions made in designing the system. The
desired outcomes, resolving the cold-start problem and achieving enhanced personalization, are
dependent on the successful implementation of the persuasive technologies. User engagement,
which is the nearest goal of persuasive design, is the variable that explains the causation of a
successful outcome. The relation between these variables is demonstrated in figure 3.
Resolving the cold-
start problem
Persuasive
computing
User engagement
Achieving desired
level of personalization
Figure 3 (Problem design)RSS that use persuasion in order to enhance the user experience have been gaining researchers'
attention as seen in. In developing the GreenCommute RS, persuasion was used to influence the
users to make better decisions concerning the environment (Wu et al., 2018). In another instance,
persuasion in a conversational RS was used to influence the users to choose healthier recipes. In
both cases, persuasive techniques were used to achieve a predetermined goal, a non-technical one
(environmental and conscientious). These systems were able to successfully enhance the
recommendations in order to achieve the goal in mind. We see that one could use this phenomenon
in order to make the RS enhance its recommendation techniques with regard to making the user
experience more
personal.
27
1. Framework of the Proposed RS
In this section, the build of the proposed RS will be discussed in three parts, the first two divide
the system into two stages of when the user first joins the system and the second stage when they
are consistently engaging with the system. The third part of this section will discuss the
components of the RS. In figure 4, the workings of these parts are
demonstrated.2829Figure 4 (Proposed RS
framework)
Conversational Techniques
Querying the user and learning to build rapport as user profile grows
E
xp
lic
it
pr
ef
er
e
nc
e
el
ic
it
at
io
n
Initial interview preference
elicitation
Context-based Techniques
Contextual information like time, weather conditions, location
Implicit
preference elicitation
D
e
m
o
gr
a
p
hi
cs
,
social
media
activity,
browsin
g
history
Hybrid Recommender System
Content-based Techniques
Item ratings and description
Knowledge-based Techniques
Checking for matching user and item information
Latent profile
generation
Cold-start problem mitigation stage
First
recommendations
User Interaction and Feedback
Further
Profile
recommendations enhancement
Human-in-the-Loop
Stage
2. Cold-start Problem Mitigation Stage
In order to make the tourist's experience more personal, the RS needs a good understanding oftheir preferences. These preferences must be obtained by the RS either through explicit or implicit
preference elicitation, or preferably through a combination of both approaches. This elicitation
is
achieved by collecting data from the tourist's interaction with the system which will be used to
build their individual profile. When a new tourist joins the system, their interaction data will be
sparse. It is here important to start setting techniques of persuasive computing at this stage already.
Nudging the tourist to share information about their purpose of using the system and setting
triggers to facilitate the required level of engagement will help obtain the data needed to initiate their
profile.
In the beginning, the system is likely to suffer from the cold-start problem as there is not yet enough
data for it to make recommendations. For this the hybrid RS will first rely on techniques that will
serve the purpose of initiating latent user profiles that will enable the system to make its first
recommendations. These techniques will together with preference elicitation methods build the
latent profiles. In order to create these latent user profiles, the system will implicitly and
explicitly
elicit tourist preferences and communicate them with the RS. Implicit preference elicitation
may
include whichever data is obtainable at this stage, e.g., weather conditions, location, browsing
history and social media activity of the new user, part of this can be used for example to feed the
integrated context-based techniques within the hybrid RS. On the other hand, explicit preference
elicitation-here applying an interview-based approach-is to obtain data from the tourist whose
relevance and significance is predetermined by the system. In order to make these interviews
interactive, the hybrid RS may apply conversational techniques to build rapport with the tourist.
Persuasive technology offers tools that could be used to keep the tourist engaged when interacting
with the system, this helps facilitate communication with the tourist without being intrusive. Asalready mentioned, it is important to start applying methods of persuasive computing from the
start. Setting triggers that will persuade the tourist to interact with the system at the cold-start
problem mitigation stage. As the hooked model suggests, these triggers must be external in the
30
beginning, as the direct call to action when prompted with interview questions. The tourist is
expected to be persuaded to act; the persuasion could look like personalized triggers from data
that
has already been gathered about the tourist. This data, made available by implicit and explicit
preference elicitation, is essential for this stage. Rewarding the tourist for taking action will ensure
continuity in the hooked model. As rewards may have many forms, they should provide the tourist
with the solution they are looking for; recommendations are supposed to deliver the right options.
Rewards may also be embedded in the interview process, showing the tourist explicitly the benefits
of using the system by showing them relevant options they may arrive at. After being provided
with initial recommendations at this stage, the tourist's reaction to the recommendations may be
linked to the investment stage of the hooked model. As the tourist has already stated some of their
preferences, and has now learned some of the system's features, the tourist has already invested in
the system. Knowing the tourist's preferences and providing recommendations accordingly allows
for a personalized experience that will keep the tourist engaged with the
system.
3. Human-in-the-Loop Stage
After introducing the tourist with initial recommendations, their feedback will be needed in order
to measure the success of the recommendation. This feedback can again be either implicit or
explicit. Asking the user to rate an item is explicit; logging their interaction with the
recommendations is on the other hand implicit. The hooked model makes sure the feedback at this
stage is to be expected as the tourist embarks on another cycle of trigger, action, reward, and
investment. This engagement enables the system to consistently reevaluate their knowledge of thetourist and therefore adjust, add or remove data in their user profile. The goal of learning more
actively is to achieve a high level of personalization. As the system acquires more knowledge
about the tourist, the hybrid RS can start weighing which techniques are best used with which user.
Knowledge-based techniques can be used, for example, to match tourists with destinations once
enough information is available. It is here important to build persuasive triggers and nudges into
the interaction between the tourist and the system to make sure the tourist is willing to continue
interacting with the system in the future. Techniques of conversational RSS are here helpful to
keep facilitating the tourist-system interaction without making these interactions
intrusive.
31
While tracking the tourist's feedback through the aforementioned implicit and explicit
preference
elicitation methods, further indicators of preference could also be found in the decision-making
behavior of the tourist. As has been discussed in the literature review, in a simplified sense,
consumer behavior will follow either of two decision-making approaches. Depending on the
level
of involvement the tourist demonstrates, the system can learn about the cognitive overload they
are willing to put up with when searching for information. If the tourist demonstrates a low
level
of involvement in the decision-making process, the system has to consider not overworking the
tourist in the process. On the other hand, a tourist showing a high level of involvement should be
regarded as complex and the system may need to gather more information about them in order to
satisfy their thirst for information of a particular
nature.
As the RS learns more about the user, personalization of triggers and digital nudges becomes morefeasible. This personalization serves the system as well as the user of the system. As the system
actively learns about the user and can deliver the appropriate items that will be accepted by the
user, the user gets more personalized experience and recommendations.
4. Hybridization of the Recommender System
The chosen approach of incorporating various RS techniques is the mixed hybridization approach.
This approach allows the system to take advantage of a variety of solutions that different RS
techniques offer. As discussed in the two stages of the system, these techniques will be applied
dynamically where suitable. As the system deals with the problem in a touristic context, it is
expected to have enough information about its items (destinations). Therefore, content-based
techniques may be used once the system has enough ratings of these items by the tourist.
Conversational techniques come in handy, especially in the first stage of the system where the
system relies heavily on interviewing the tourist in order to build a latent profile for them and
initiate the first recommendations. Conversational techniques may also be used in the second stage
if the tourist decides to interact more explicitly with the system, for example. Context-based
techniques are also very useful at the first stage as they provide the system with implicit
information about the tourist that helps build their profiles. Context is also important in the
second
stage, since the system dynamically e.g., searches for destinations, needs to make sense of the
tourist's location and the weather condition at the destination. Knowledge-based techniques may
32
also be applied in the two stages but are to be expected to make sense rather later, when enough
information has been gathered into the tourist's profile. Knowledge-based techniques may be
regarded as a segway to move away from content-based techniques, if that is the desired
approach.IV. Results
To resolve the issue of the cold-start and personalization within the context of tourism, the two use
cases are studied to reason the design and contextualize it. The first use case approaches the
personalization problem from the tourist perspective while the second use case approaches the
cold-start problem from the perspective of a start-up that provides tourism services. Attaching the
problems to their dedicated use cases is not drawn on dependency but is rather an attempt to
emphasize the benefits of the proposed framework. Figure 5 demonstrates both perspectives
according to their end
goal.
Use case 1: User
perspective
Use case 2:
Start-up
perspective
Destination
Personalization enhancement
Cold-start problem mitigation
Destination
Figure 5 (Use-case from user and start-up perspectives)33
1. User (Tourist) Perspective:
There is a huge variety of information the tourist may look for when interested in travelling.
Tourists look for information not only as they plan their trip, but also as they reach their destination
and even may still be interested in gathering information after they have visited their destination.
Their options to obtain such information traditionally include reading booklets, contacting tourism
information centers or tourism service providers and joining a guided on-site tour. This hinders
many tourists from making informed decisions about their trip, as these traditional ways to obtain
information can be very costly in terms of budget and time. These traditional information sources
also fail to provide personalized recommendations. Thanks to the exponentially growing
popularity of using internet tourism services, tourists have more freedom to explore alternatives
and make well informed decisions. RSS in tourism take this a stride farther and enhance the
tourist's experience in their decision-making
journey.
As the tourist seeks information, regardless of their level of involvement, they expect to be
provided with destinations they are generally interested in, ones that are relevant to their travel
plans. An RS that can provide the tourist with recommendations about their destination should also
make these recommendations as personalized as possible. The application of the proposed RS
of
this research serves the tourist in achieving such personalized journey.
The tourist, regardless of their level of involvement in the information-search will be prompted
with a small interview as they join to use the application. The interview may query the tourist
about their general travel preferences, like what destinations, architecture style, region, time,
etc.,they are interested in. Further queries may also include demographic information about the tourist,
such as their age, education, profession etc. Using a conversational approach when interviewing
will help to keep the human element that is usually essential in traditional information-search.
Once the recommendations start resonating with the tourist, the system will develop a better
understanding of the tourist and their profile. Once the tourists' needs are met, their trust in the
system is expected to increase. As a goal, the system aims to persuade the tourist to invest in more
interaction capital in order to make its recommendations better with each round. The tourist will
soon understand that the more information they are willing to provide, the more able to offer a
personalized experience the system will become.
34
The interaction with the system should often include nudges and triggers in order to keep the tourist
engaged. These interactions should also put an emphasis on the tourist's awareness of what
information they are providing the system with. For example, the tourist may have access to their
preference profiles all the time and may see what choices they have made in the past that have
influenced their profiling. Another example is providing the tourist with multiple choices when
prompted by the system, as shown in figure 6. This could be privacy related, for example, as they
are asked to provide their live location, they might as well be asked if they would like to enter
a
static location that is less indicative of where they are. As shown again in figure 6, prompts that
may ask about their general interests and purpose of using the application may provide them with
a variety of choices so that they are not limited to something that does not represent their actual
interests.
<
>Which architecture style
are you interested in?
#Gothic
#Renaissance
#Classical #Modern #Brutalist
#Bauhaus #Postmodern
We would like to provide
you the best experience
possible. Please choose a
suitable option to share
your location:
#Baroque #Gothic
#Medieval
Enter Location Manually
Allow Live Location
Figure 6 (Examples of user interface design)
35
2. Start-Up Perspective:
Tourism service providers thrive on the loyalty of their customers. Start-ups with their new systems
will most likely have to deal with the cold-start problem, which makes the proposed RS of this
research a good candidate to approach the problem and to win customer loyalty. As start-ups inthe tourism sector, the competition is huge especially in the digital age where most will likely use
more popular search engines to look for information. It is of great benefit to new companies to
find a way to understand their customers' needs and provide them with the right solutions as soon
as possible.
Knowing the customer and their needs right from the start as they use the service can cut down on
time and budget otherwise invested in expertise that is needed to understand the user and in
marketing strategies to keep the customer coming back for more. This expertise costs human
resources that could be shortened by using digital resources such as RSS. This is especially an
important approach as the amount of information that is out there and can be provided to the
customer is beyond human ability to process. RSS is one way to process huge amounts of data and
make sense of it.
Marketing strategies, in the traditional sense, are usually intrusive and very explicit in the way
they
approach the customer. Therefore, incorporating persuasive computing techniques will help
ensure
that the user does most of the marketing on their behalf. This could be the fact that the customer
has developed a habit of using the service when they look for information. Expecting the customer
to form a habit around the service is plausible when they see that their needs are being met. These
needs are best met when the system can provide recommendations that are very personalized and
accurate. All that the start-up needs to possess is data, at best in very massive amounts. Big data is
essential to enable an RS to deliver quality
recommendations.
V.
ConclusionThis research proposes a conceptual framework of a hybrid RS in the field of tourism that solves
common RS problems by winning user engagement. Specifically, persuasive computing
techniques were used to increase user engagement in order to solve the cold-start problem and
36
enhance the personalization of the recommendations. Applying persuasive techniques, at every
turn when making recommendations and interacting with the user, achieves an increase in user
engagement. This engagement is essential to solving the cold-start problem as the system learns
enough information about the user right from the start of the user joining the system. The system
then thrives to make this engagement a habit in the users, which ensures that more information is
collected to expand the user profile resulting in the personalization of the user
experience.
By analyzing the state of the tourism sector, state-of-the-art persuasive technologies and state-of-
the-art RS technologies, this thesis finds different techniques that when combined will allow for a
personalized tourist experience, which benefits the tourist as well as tourism service providers. By
studying the tourism sector, emphasis was placed on the technologies currently used to handle big
data and, on the tourist's decision-making process. Researching the availability of RSS for the
purpose of meeting tourists' needs and understanding these needs allowed for the harnessing of
new ways to approach tourists in their decision-making and trip planning. Persuasive technologies
were also examined in order to approach the tourist and influence their experience. Digital
nudges
were studied in order to find an application for them in forming habits in the tourists that keep
them engaged with the system. These persuasive technologies were also important for dealing with
the tourist's preferences. Multiple types of RSS were then discussed with the focus on finding
dynamic techniques that can approach the cold-start problem and achieve personalization. In the
end, a hybrid RS framework solving the cold-start problem and personalizing the tourist'sexperience was proposed and suggestions on how the RS may look like when applied were made.
As was found in this research, current literature on the topic of persuasive and personalized RSS
applies to making the user meet certain goals as a result of using the RS. This thesis rather shifts
the focus to using persuasiveness and personalization in order to make the RS itself more efficient
and by that making the user experience a better one. However, certain techniques used in this thesis
may not be the best option, as there exists a lot of options, e.g., which RS techniques are best suited
at which stage and which hybridization methods would achieve the best performance. Another
area where alternative options were not weighed is the area of choosing the most suitable
persuasive technique and combining them with the best RS techniques. Furthermore, the design of
interview questions and data collection was not studied with enough research. RSS were discussed
37
abstractly and therefore the proposed framework lacks technical background. These are issues that
can serve as the next step in expanding the research on the topic.