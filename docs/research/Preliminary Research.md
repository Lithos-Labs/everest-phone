> The initial research on the market and existing options before starting the project.

## Existing similar projects
One of the first things that I did was research the existing options for quite a while, this were all of the relevant projects that I found:

### PinePhone
Website: [PinePhone (pine64.org)](https://pine64.org/devices/pinephone/)

Probably the most well developed semi-open source phone that exists.

It is backed up by a moderately sized company and it features many customizability options. It might also be the most opensource production phone to ever exist with published and easily accessible schematics for their PCBs. They can be found at [schematics and certifications (pine64.org)](https://pine64.org/documentation/PinePhone/Further_information/Schematics_and_certifications/). These will prove useful in the [[Design]] stage of the project.

It's only issue is that:
- It's not fully open source - lacks PCB files

### Librem5 Phone
It is very similar to the PinePhone but in it's own way.
It's also very well developed, although not as much as the PinePhone and it's also in the same level of openness, having published the schematics but not the PCBs. It's understandable from a business standpoint but it makes it hard to develop a phone from it. Why didn't they take this into account?
One of the main differences that it has with the [[#PinePhone]] is that it uses [PureOS (pureos.net)](https://pureos.net/) which seems to be just a skin of Ubuntu and Ubuntu Touch.

Also, the only issue that there is that:
- It's not fully open source - lacks PCB files

### ZeroPhone
Website: [ZeroPhone (hackaday.io)](https://hackaday.io/project/19035-zerophone-a-raspberry-pi-smartphone)

Probably the one of the most well known self-made phones. However, it has three main issues:

1. It uses a Raspberry Pi, which is an undesirable trait according to the [[PDS]].
2. It's very thick meaning that it's hard to carry around specially in a pocket. A significant part of the size however, is taken by the large batteries.
3. It's more of a feature phone, it lacks a proper LED screen, and you must interact with it with buttons.

Regardless of it's downsides it will serve as an additional resource for research. Although, as far as I can tell the documentation is scarce and unorganized.

### Weaver MPX
Website: [Weaver MPX (youtube.com)](https://www.youtube.com/watch?v=JDmqrCzniDg)

Even though it just appears on the internet in the linked video above, it's one of the best phones from a hardware standpoint. It uses a proper microcontroller like the ones you'd find in regular Android phones and it has a touchscreen. Even the form factor is good, being pretty slim without a case. It uses GSM which is now outdated in most regions, but it's still impressive. If it had more information and resources it would be extremely helpful for the development of this project. 

It has some issues such as:
- Only having a single custom-written application
- Only working with GSM (2G)
- Non-existent documentation

### FonTele S2
Website: [FonTele S2 (youtube.com)](https://www.youtube.com/watch?v=Hsf1dmJm38M)

This is a featurephone with a numpad and physical buttons that runs with the help of an Arduino board. Just like the [[#ZeroPhone]] it has an LCD display and it has a custom OS like the [[#Weaver MPX]], however it also has a snake game, texting and other features, making a hybrid between the two. However, in the Weaver MPX fashion, it's only "documentation" are a series of YouTube videos, so not much can be extracted from that.

### KiteBoard
Website: [Kiteboard (kiteboard.io)](https://www.kiteboard.io/)

While not actually a phone, but a unified module board to make a phone-like device, KiteBoard is an interesting project. It's very similar to Google's Ara but with open source hardware. The aim of this board was to build your own phone from a library of components to customize it to your own need. This is interesting in terms of modularity or customizability, however it faced a similar tragic ending as [[#Project Ara]] as it didn't meet it's funding goal. [^kiteboard]

## Inspirations
### Project Ara
Website (unofficial):  [Project Ara (leaflabs.com)](https://www.leaflabs.com/project-ara)

This is one of the craziest attempts at Google to create a new trend: a modular phone. Alas, they failed. However, I will take part of inspiration from the modularity aspect of this phone and implement it on my own where possible. Although expect to be closer to [[#PinePhone]]'s modularity.

### Liberty Phone
Website: [Liberty Phone (puri.sm)](https://puri.sm/products/liberty-phone/)

The main feature that I took inspiration from this phone was the [[physical kill switch buttons]]

### Minimal
Website: [Minimal (minimalcompany.com)](https://minimalcompany.com/)

Even though it's not opensource at all, it is still an interesting project. It features a full qwerty mini-keyboard and an e-ink display to see the Android 14 environment. It's unique. They based their design choices on some reddit polls apparently which is non-conventional [^mnm_red]. Overall it is a great idea and with some very unique ideas to take inspiration from.


### Nothing's Design
Website: [Nothing (nothing.tech)](https://nothing.tech/)

The design will be inspired by the transparency, simplicity and modernity of Nothing's design.

## Other interesting resources
- [Modular Smartphone (wikipedia.org)](https://en.wikipedia.org/wiki/Modular_smartphone): for inspiration
- [Reparability Scoring Rubrik](https://www.ifixit.com/Wiki/Repairability_Scoring_Rubric_v1.6): Should score a 9-10 in this Rubrik

## People on Reddit who've had the same idea
Many people have already had the same idea before, with most of them being stuck at the planning section. This is a list to showcase how necessary is an opensource consumer-first phone in the current market.

People who had their own ideas:
- [A Smartphone Designed to Help You Disconnect](https://www.reddit.com/r/dumbphones/comments/18r84gu/a_smartphone_designed_to_help_you_disconnect/): This one actually turned into a full fledged commercial phone under the branding of [minimalcompany.com](https://minimalcompany.com/). It features a e-ink display with a qwerty keyboard and it runs Android 14. Shockingly it managed to raise more than 750k USD. It just recently started shipping it's units, although most people aren't getting their products... [^minimal] I hope it won't be a scam. (Referenced in [[#Minimal]])
- [Calling All Makers: Let's Build an Open Source E-Ink Dumb Phone!](https://www.reddit.com/r/maker/comments/1e3tp41/calling_all_makers_lets_build_an_open_source_eink/): This is an interesting one and it even has a small but dead Discord server. It's most interesting channel is the "resources" where some other similar phones and projects are listed.
- [Hello! I'm making an open-source dumbphone, what should the final design look like?](https://www.reddit.com/r/dumbphones/comments/nfui5x/hello_im_making_an_opensource_dumbphone_what/): Also, some interesting ideas are mentioned about the specs of the phone. "u/jhonny-stene" had this idea for a while.

People who are just lost but have the spirit:
- [Why can't you just buy a phone like you do a PC?](https://www.reddit.com/r/buildapc/comments/txhuzx/why_cant_you_just_build_a_phone_like_you_do_a_pc/)
- [How much would it cost to design and make a custom Smartphone?](https://www.reddit.com/r/Smartphones/comments/1alyp4t/how_much_would_it_cost_to_design_and_make_a/)
- [DIY Smartphone/Tablet](https://www.reddit.com/r/diyelectronics/comments/1dj2ir6/diy_smartphonetablet/)
- [People make custom PCs, but do people make custom phones](https://www.reddit.com/r/Showerthoughts/comments/1bwxp4b/people_make_custom_pcs_but_do_people_make_custom/)
- [IWTL how to make my own smartphone](https://www.reddit.com/r/IWantToLearn/comments/2paaah/iwtl_how_to_make_my_own_smartphone/)
- [Could you build a smartphone from the ground up?](https://www.reddit.com/r/cyberDeck/comments/17exc2d/could_you_build_a_smartphone_from_the_ground_up/)
- [I would like to create my own Android Phone...](https://www.reddit.com/r/Android/comments/1k6ins/i_would_like_to_create_my_own_android_phone_is/)
- [How hard would it be to create a new smartphone with its own ecosystem?](https://www.reddit.com/r/AskProgramming/comments/u32pbc/how_hard_would_it_be_to_create_a_new_smartphone/)
- [Creating a New Dumbphone From Scratch?](https://www.reddit.com/r/dumbphones/comments/18u3z58/creating_a_new_dumbphone_from_scratch/)
- [Are completely DIY phones with custom features like this possible?](https://www.reddit.com/r/cassettefuturism/comments/18ewyvt/are_completely_diy_phones_with_custom_features/)
- [Thinking about building my own feature phone](https://www.reddit.com/r/dumbphones/comments/16nmkl9/thinking_about_building_my_own_feature_phone/)
- [DIY Smartphone](https://www.reddit.com/r/diyelectronics/comments/r2bgcn/diy_smartphone/)
- [How to build my own smartphone?](https://www.reddit.com/r/AskEngineers/comments/bkcm2c/how_to_build_my_own_smartphone/)
- [How much would it cost to build a smart phone from scratch?](https://www.reddit.com/r/Smartphones/comments/pbq8ze/how_much_would_it_cost_to_build_a_smart_phone/)
- [Could a sufficiently talented electrical/computer engineer completely design an entire smartphone by themselves?](https://www.reddit.com/r/AskEngineers/comments/zbpq6y/could_a_sufficiently_talented_electricalcomputer/)


[^minimal]: https://www.indiegogo.com/projects/the-minimal-phone-first-e-ink-qwerty-phone#/discussion
[^kiteboard]: https://www.kickstarter.com/projects/2070436562/kite
[^mnm_red]: [E-Ink vs LCD (reddit.com)](https://www.reddit.com/r/dumbphones/comments/18xvnys/eink_vs_lcd_displays_for_dumb_phones_whats_your/) and [QWERTY vs Touch (reddit.com)](https://www.reddit.com/r/dumbphones/comments/190rwrh/qwerty_vs_touch_for_dumb_phones_whats_your/)
