> The general definitions that shape the project

>[!warning]
>Expect this page to be edited and changed as the project develops. Although it will become more stable over time.

It aims to have 2 stages:
1. Proof of concept
2. Commercial development

The proof of concept stage will be made to demonstrate that it is possible to build, and the commercial development will try to deliver the product to as much people as possible.

## Proof of concept
### Philosophy

> *"I hate phones, that's why I want to make one"*

- The main goal is to demonstrate that phones can be done right
- **Completely** open source in both the software and hardware
- The development will be thoroughly documented to offer the best resource for learning about phone design

By demonstrating that capable open source phones can be created, the aim is to then bridge into larger scale production. The thorough documentation throughout the process, if done right, could become the best resource ever for phone manufacturing as most of the techniques are gatekept my manufacturers or scattered across obscure documentation.

What is wrong with current phones? Well, almost everything but convenience. Think about how your phone...

- ...harvests your data
- ...forces you to buy a new model as soon as it drops
- ....gatekeep you from the innerworkings of your device
- ...apps are designed to waste your life away

With that in mind we can create a phone that...

- ...respects your privacy
- ....promotes reparability and longevity
- ...is transparent about how it works
- ...respects your time by being unintrusive

### Design

With the philosophy clear, design decisions  can be built around it, which will later affect the features. This affects both the physical design and the software stack.

- Open: The device should be transparent, accessible and auditable.
- Modular: Allowing it to be customized, repaired and reproducible.
- Flexible: The device should adapt to the user, not vice versa.

Regarding distractions, some conscious decisions should be made to minimize them. Time sink-holes come from applications and how we interact with them, therefore by limiting their usage, or making the activity uncomfortable, less time should be wasted. More specific decisions regarding distractions will be featured here: [[Distraction-free features]].

### Capabilities

For the development version, only the most central features should be prioritized, this includes:

- LTE connectivity: make and receive phone calls and messages
- Wi-Fi support: being able to connect to wireless networks
- Android OS: running the latest version of stock Android
	- File management
	- APK support

## Commercial development

All of the aims build up from the [[#Proof of concept]].

### Philosophy

As the product matures, the philosophy should adapt to a larger market, taking into account the rights and necessities of the customers.

- All the [[#Philosophy|previous aims]]
- Disrupt and set new standards for commercially competitive open hardware. Becoming a standard, not a brand.
- It will be meant for anyone that cares about agency over their devices
- It won't sell your data, ever.
- Be hackable, encourage discovery and experimentation. By extent this should foster customizability and reparability.

Above all else the project should be completely open source. The goal is that by making that, either other more capable manufacturers adapt it or it gets more traction so that more people end up having a better experience with their phone. It's not about a brand or a gadget, it's about becoming a new standard for the tech industry.

### Capabilities
With the budget increasing, further capabilities will be able to be added such as:

- Camera support
- App ecosystem
- NFC Tags
- other modern features

### Price
Should be moderate, it should compensate the increased cost of low-volume production and modularity with lower spec parts. It should aim to be around $300. Benefit margin should be kept low to ensure a fair price, but with some profit to allow for iteration and improvements. Even though some specs might end up lower, the battery should be still kept decent.
