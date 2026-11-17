# Page 1: Interacting with Human Voice and Language

## You talked to an AI today
Has your phone fixed a typo recently, without you even noticing? Did your email app hid a spam message?
Maybe you asked an AI assistant for the weather or read a web page translated into your language. In each case,
a machine handled human language. These tools are so common that we rarely stop to ask how they work,
and this section covers exactly that.

Language technologies are everywhere (even when you can’t see them!)
Many of these systems work quietly in the background.

Maybe in the morning your alarm is switched off with a voice command, and your phone reads out the news.
While you commute your navigation app speaks directions, and your messages are dictated rather than typed.
When at work your email filters spam, your documents suggest corrections,
and video calls generate automatic subtitles.
And in the evening a streaming service searches for a film from a vague description,
and a website translates a review from another language.

## What are language technologies?

Language technologies are computer systems that can work with the way people write or speak.

Text-based technologies, or "natural language processing" read, analyse and produce
written text.  Voice-based technologies, or speech technologies listen to speech, 
turn it into text, and speak back with a synthetic voice.

The two families are closely linked. A voice assistant, for example, first converts your voice into text,
then uses text technology to work out what you want, and finally turns its answer back into speech.
Page 2 focuses on the text side, and Page 3 on the voice side.

A short history: dreaming of talking machines

The idea of talking to machines is much older than smartphones.

- 1950s: early experiments tried to translate Russian sentences into English automatically,
and a laboratory machine learned to recognise spoken digits from a single speaker.

- 1960s: a program called ELIZA imitated a conversation by matching keywords in what the user typed.
It had no real understanding, yet some users felt as if they were being listened to.

Following decades: researchers wrote more and more rules by hand, covering grammar, dictionaries
and sound patterns. This worked in narrow situations but broke down quickly in real conversation.
Today: systems learn from enormous collections of examples instead of relying on hand-written rules,
which is why they have become so much more useful in recent years.

## Why is human language so hard for machines?

Human language, unlike programming languages, is:

- Ambiguous: “I saw her duck” can mean two very different things.
- Dependent on context: “It’s cold in here” may be a comment or a request to close the window.
- Constantly changing: slang, new words, abbreviations, emojis.
- Varied in sound: accents, speed, background noise and different voices make speech very diverse.
- Full of hidden meaning: irony, humour and politeness often say the opposite of what the words literally mean.
“Great, another Monday!” is rarely a happy sentence.

Most systems therefore cannot be given a list of grammar rules, and they instead
learn patterns from huge amounts of examples. This approach is called machine learning, and
the steps are always similar:

1. Input: text typed by a person or audio recorded by a microphone.
2. Analysis: the model looks for patterns it learned during training.
3. Output: a prediction, such as the next word, a translation, a transcription or a spoken answer

A simple example is a spam filter. It is shown thousands of messages already labelled “spam” or “not spam”,
and it learns which words and patterns tend to appear in each group. When a new email arrives,
it makes an informed guess

---
### Sources

- https://en.wikipedia.org/wiki/Language_technology
- https://en.wikipedia.org/wiki/Natural_language_processing
- https://en.wikipedia.org/wiki/Computational_linguistics
- https://en.wikipedia.org/wiki/ELIZA
- https://en.wikipedia.org/wiki/Machine_learning

---
# Page 2: Text-Based Language Technologies

## Why text came first

Text is easy for computers to store and search, and the web contains enormous amounts of it.
Every article, forum post, product review, or even every book is a potetial example from
which a machine can learn.
That is why text-based AI developed quickly and now sits behind many of the services we use every day.

## Everyday examples

- Autocomplete and autocorrect. When your keyboard suggests the next word, it is predicting what
is most likely to follow what you have typed so far. This fairly simple idea of predicting the next word 
is also the core mechanism of large language models.
What is often a surprise is that your phone keyboard also continuously edits the hitboxes of
each letter based on what you are typing. If the system expects a vowel after “th”, the “e”
key becomes a slightly larger target, so that a slightly imprecise tap still lands
on the letter you most likely meant. Autocorrect works on the same principle: if you type “teh”,
the system knows that “the” is far more likely than any other word, and fixes it before you notice.

- Machine translation. Services such as Google Translate
convert text from one language to another. Around 2016, translation systems moved 
from phrase-by-phrase methods to neural networks that read the whole sentence,
which made the results much more fluent.

- Chatbots and AI assistants. Customer-service chats and general assistants often found
nowadays in websites can answer questions, summarise documents, and write or correct text.
They are built on large language models trained on vast collections of text.

- As previously mentioned, spam filters and email sorting.
Email services classify messages by analysing their content,
separating spam and unwanted mail from ordinary mail.

- Search and summarisation. Search engines try to understand the intent behind a query, 
not just match keywords. Summarisation tools shorten long articles into a few lines.

- Sentiment analysis. Companies analyse reviews and social-media posts to estimate
whether people sound positive, negative or neutral about a product.

So how does a chatbot “understand” you?

A chatbot does not understand language the way humans do. It splits your text into
small pieces called tokens and, using what it learned from enormous amounts of text,
calculates which piece is most likely to come next, again and again, until a full answer appears.
The system is simply working with statistical patterns.

---
### Sources

- https://en.wikipedia.org/wiki/Google_Neural_Machine_Translation
- https://www.apple.com/newsroom/2023/06/ios-17-makes-iphone-more-personal-and-intuitive/
- https://en.wikipedia.org/wiki/Sentiment_analysis
- https://en.wikipedia.org/wiki/Text_mining

---

# Page 3: Voice-Based Language Technologies

## From typing to talking

Speaking is the most natural way humans communicate, so it is no surprise
that companies wanted machines to understand our voice. Voice technologies
solve two opposite problems: turning sound into text and turning text into sound.

<!--maybe i talk a little bit about speech history too? idk -->

## Speech recognition (speech-to-text)

Automatic speech recognition (ASR) converts spoken words into written text. You meet it when you:

- dictate a message instead of typing it;
- see automatic subtitles on videos or live meetings;
- give a voice command to your phone, TV or car.

Until the early 2010s, ASR relied on hand-built statistical models.
The arrival of deep neural networks brought a big improvement in accuracy.
More recent open systems, such as OpenAI’s Whisper, are trained on hundreds of thousands
of hours of recordings in many languages and work reasonably well even with accents and noise.

## Speech synthesis (text-to-speech)

Text-to-speech (TTS) does instead the reverse: it turns written text into a spoken voice.
Everyday examples include GPS directions, audiobooks and screen readers for blind or
visually impaired users. Older synthetic voices sounded robotic because they stitched
together recorded fragments. Neural models such as WaveNet and Tacotron 2
generate the sound wave directly and produce voices much closer to natural human speech.

## Voice assistants: merging text-to-speech and automatic speech recognition

Assistants like Siri, Alexa or Google Assistant chain several technologies in a pipeline:

1. Wake word detection: the device listens for a phrase such as “Hey Siri” and ignores everything else.
2. Speech recognition: your voice is converted to text.
3. Language understanding: the system works out what you want (“set a timer”, “play music”).
4. Action and answer: it carries out the request or finds a reply.
5. Speech synthesis: the reply is spoken aloud.

---
### Sources

- https://en.wikipedia.org/wiki/Speech_recognition
- https://en.wikipedia.org/wiki/Speech_synthesis
- https://en.wikipedia.org/wiki/Speech_processing

---

# Page 4: Open challenges, future

Humans use shared knowledge, tone and the situation to decide what a sentence means.
Machines have only the words (and sometimes the sound) to go on. Irony, sarcasm,
jokes and indirect requests remain hard: “Nice weather we’re having” means the
opposite during a storm. The machina cannot know that. Long conversations are difficult too, since a system
can lose track of something said several minutes earlier.

Language models can produce fluent, convincing text that is simply wrong, including invented facts,
names or references. This phenomenon is called hallucination, and reducing it is one of the most
active areas of work in the field. Because the answer sounds sure of itself,
the mistake is often hard to spot without double-checking.

Speech recognition works well in a quiet room with a clear speaker, and much less well
in a busy street, in a moving car, or when several people talk at once.
Also strong regional accents, fast speech and unusual vocabulary (names, technical terms)
too increase the number of errors.

Most systems learn from large collections of examples, so they perform best
for languages that have plenty of text and recordings online.
Of the thousands of languages spoken around the world, only a small fraction
is well-supported by today’s tools, and many dialects and minority languages are barely covered at all.

As mentioned on Page 1, these systems recognise patterns rather than truly understanding language.
This is why a model can pass a difficult exam question and then fail at a simple
everyday reasoning task (Remember the r in strawberry count?). Closing this gap is still an open research question.

Behind the scenes, there are also everyday constraints: powerful models need large amounts of
computing power, a stable internet connection is often required, and delays of even a second
can make a voice conversation feel unnatural.

What comes next?
More natural conversation

Today’s voice assistants are very robotic: you wait for the answer and cannot easily interrupt.
Future systems aim to handle interruptions, pauses, hesitations and changes of topic
more like a human, and to respond more quickly.

Systems that listen to speech in one language and produce speech in another with
only a short delay are already being developed and tested. The goal is that two
people who share no language could hold a normal conversation.

Instead of handling only text or only sound, newer systems can combine text,
voice, images and video in a single conversation. For example,
you could point your phone camera at a menu, ask a question, and hear the answer spoken back.

### Sources

- https://en.wikipedia.org/wiki/Speech_recognition
- https://en.wikipedia.org/wiki/Speech_processing
- https://en.wikipedia.org/wiki/Machine_learning
- https://en.wikipedia.org/wiki/Language_technology
- https://chatgpt.com/features/voice-with-video/

---