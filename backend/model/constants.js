export const flags={
    "red_flags": [
      "The tenant is responsible for any damage caused by fixing items to walls",
      "The tenant cannot make claims for compensation for various issues such as broken appliances or inconvenience caused by building maintenance",
      "The tenant must pay a fee if permission is granted to transfer the tenancy",
      "The landlord will not pay compensation to the tenant in case of damage caused by an insured risk",
    ],
    "orange_flags": [
      "The tenant cannot change locks or keys without permission",
      "The tenant must clean windows, replace broken glass and light bulbs, unblock and keep all gutters, sewers, drains, toilet bowls, cisterns, basins, baths, showers, water pipes and ducts free from blockages, and report faults",
      "The tenant cannot store any items on balconies or outdoor spaces",
      "The tenant must vacate the premises, return it in the same condition as the start date, pay for any damages or repairs caused by them, pay for any outstanding bills, return any rented equipment, remove personal belongings and rubbish, and return the keys",
     "The landlord must inform the tenant within 10 working days if any deductions are to be made from the deposit",
      "If the tenant disputes any deductions, they must inform the landlord within 20 working days",
      "If the amount to be taken from the deposit is greater than £5,000 and a dispute arises, formal arbitration must be used",
      "If the monies due are more than the deposit held, the tenant must pay the excess within 14 days of written demand",
      "The tenant must give at least two months' notice in writing to end the tenancy"
    ],
    "green_flags": [
      "The managing agent is liable for any loss, theft or damage to parcels stored in the parcel room",
      "The landlord will not interrupt or interfere with the tenant's lawful occupation, enjoyment, and use of the premises",
       "The tenant has the option to terminate the agreement within the first two weeks, subject to certain conditions",
      "The tenant may relocate to another UNCLE building, subject to availability and compliance with the terms of the agreement"
    ]
  }
export const advice=`1. Red Flag: The tenant is responsible for any damage caused by fixing items to walls.

Suggested Change: The landlord should be responsible for any damage caused by fixing items to walls, as long as the tenant obtains prior written permission.

Justification: It is reasonable for tenants to want to personalize their living space by hanging pictures or shelves. However, they should not be held responsible for any damage caused by these actions if they have obtained permission from the landlord and followed any guidelines provided.

Negotiation Tip: Offer to provide a detailed plan of where and how you plan to hang items, and ask for written permission from the landlord. This will show that you are responsible and willing to work with the landlord to ensure the property is well-maintained.

2. Red Flag: The tenant cannot make claims for compensation for various issues such as broken appliances or inconvenience caused by building maintenance.

Suggested Change: The tenant should be able to make claims for compensation for issues that are not their fault, such as broken appliances or inconvenience caused by building maintenance.

Justification: It is unfair for tenants to be held responsible for issues that are not their fault, especially if they have paid rent on time and followed all the rules.

Negotiation Tip: Ask the landlord to clarify what they mean by "various issues" and negotiate specific exceptions to this clause. For example, you could agree that the tenant can make claims for compensation if the issue is caused by the landlord's negligence or if it affects the tenant's health and safety.

3. Red Flag: The tenant must pay a fee if permission is granted to transfer the tenancy.

Suggested Change: The tenant should not have to pay a fee to transfer the tenancy.

Justification: It is unreasonable for tenants to have to pay a fee to transfer the tenancy, especially if they are doing so because of a change in their personal circumstances.

Negotiation Tip: Ask the landlord to waive the fee or negotiate a lower fee. You could also offer to find a replacement tenant yourself to make the process easier for the landlord.

4. Red Flag: The landlord is not responsible for repairing the tenant's belongings or the premises if they are destroyed or damaged by a storm or flood.

Suggested Change: The landlord should be responsible for repairing the premises if they are damaged by a storm or flood, but the tenant should be responsible for repairing their own belongings.

Justification: It is reasonable for landlords to be responsible for repairing the premises if they are damaged by a storm or flood, as this is outside of the tenant's control. However, it is not reasonable for landlords to be responsible for repairing the tenant's belongings.

Negotiation Tip: Ask the landlord to clarify what they mean by "belongings" and negotiate specific exceptions to this clause. For example, you could agree that the landlord is responsible for repairing any damage to the structure of the property, but the tenant is responsible for repairing any damage to their own personal belongings.`;
export const SECTION_SUMMARY_PROMPT = "\nQuestion: Create a summary of this text, which is a portion of a contract. The summary should include the details of the rental property, the duration of the lease, the rental amount and payment terms, security deposit, maintenance and repair responsibilities, restrictions on use if available. The summary should not exceed 300 hundred things .If you are unable to summarize or all the content is generic answer 'Nothing'. \n Answer:";
export const MAIN_SUMMARY_PROMPT ="Filter out all the non-important or generic sections.";
export const FLAGS_PROMPT = 'Identify any terms in this agreement that are red flags (definitely deal breakers, really uncommon unfavorable) , orange flags (slightly unfavorable) and  green flags (uncommonly favorable) to the tenant and explain why. Don´t use acronyms and avoid complicated words. Do not repeat terms. You can return empty lists if terms that match the description are not found. You must just return a json format with the terms and explanations, take this placeholder values as an structure example: {"red_flags":["redflag 1 with explanation","redflag 2 with explanation"],"orange_flags":["orangeflag 1 with explanation"],"green_flags":["greenflag 1 with explanation","greenflag 2 with explanation"]}'
export const ADVICE_PROMPT = "Give me advice on how I could change some of these terms to be more favorable to the tenant. Include suggested changes, justification and negotiation tips for each."
export const summary = `This is a lease agreement between Jameson Property Management Limited (Landlord) and Emma Thompson (Tenant) for the premises located at 43-45 Thurloe Street, London, SW7 2LQ, United Kingdom. The lease term is from May 1, 2023, to April 30, 2024. The monthly rent is £3,500, and a security deposit of £4,000 is required. The Landlord is responsible for maintenance and repairs, except for damages caused by the Tenant or Tenant's guests. Pets are not allowed, and rent increase is subject to local market standards. The agreement is governed by the laws of England and Wales, and any changes require written agreement from both parties`;
export const text = `### Definitions

1. We need to use some legal terms in this Agreement which We have capitalised. By providing this list of definitions We 
aim to help explain some terms that are in this Agreement.
Term Meaning
ADR The Alternative Dispute Resolution Service for the deposit scheme approved by the Government.
Agreement This agreement for a fixed term assured shorthold tenancy.
Building The building described in Part B of clause 3, of which the Premises forms part. 
Contents Any of Our furniture, furnishings, carpets, sanitary ware (toilet bowls, cisterns, baths, basins, 
showers and other fittings), decorative features, electrical equipment, other equipment or any floor, 
ceiling or wall and including anything listed in any Inventory that We supply.
Data Protection 
Laws
The Data Protection Act 2018 and all subordinate legislation in force from time to time in England 
which implements the European Union Directive 95/46/EC, Directive 97/66/EC or any successor 
legislations thereto (including Regulation 2016/679), any associated codes, regulations or 
guidance (as may be amended or replaced from time to time).
Dependants The Resident’s dependants.
Deposit The money You give Us (or the Managing Agent on Our behalf) in case You fail to comply with any 
of the terms of this Agreement. The money will be sent to a Government deposit scheme (currently 
TDS) to hold during the Term.
EEA European Economic Area.
End Date The date and time upon which this Tenancy ends (unless terminated earlier in accordance with the 
terms of this Agreement), as set out in Part B clause 4.
Guarantor This is someone who agrees to meet Your responsibilities under this Agreement if You do not keep 
to them (for example, paying Your Rent).
Head Lease or 
Regulations for 
Managing the 
Shared Areas 
If applicable, an agreement that the Landlord has entered into or is otherwise obliged to comply 
with which contains regulations applicable to the Building which the Landlord or You in turn are 
legally required to follow. 
Inventory The document We have had prepared showing details of Our Contents within the Premises, 
including the condition of the Premises in general. We rely on the Inventory at the end of the Term 
to assess any damage (other than reasonable wear and tear) so You should check it carefully at 
the start of the Term.
Joint and 
Several 
Liability 
This means that all of the Residents (if there are more than one) are individually and jointly 
responsible for paying Rent and for all other Resident’s responsibilities set out in this Agreement.
Landlord, We, 
Us, Our 
IV Three LP (limited partnership number LP021783) whose registered office is at 1st Floor, 7a 
Howick Place, London, SW1P 1DZ (acting through its general partner IV Three (GP) LLP (limited 
liability partnership number OC437248) whose registered office is at 1st Floor, 7a Howick Place, 
London, SW1P 1DZ.
Lead Resident The person named as such in Part B clause 2.b.
Lender This includes the person or people who have lent money to the Landlord and secured the loan 
against the Building and/or the Landlord’s ownership interest in the Building.
Managing 
Agent 
The agent We use to manage the Building, including the Premises, and Tenancy on Our behalf 
and whose details are set out in Part B clause 7.
Month or 
Monthly
One ‘calendar’ month (for example, January, February and so on), not just four weeks.
Part This refers to a part of this Agreement, as listed in the contents.
Permission If this Agreement states You need Our permission to do something You must request and obtain 
Our (or Our Managing Agent’s) permission in writing before doing so. Where permission is 
required, it may be given or withheld in Our or the Managing Agent’s absolute discretion.
Premises This means the premises which are described in Part B clause 3 (or any part of them) and which 
are the subject of this Tenancy. 
Relocation 
Notice
This has the meaning set out in Part I, clause 7.a(iii).
A. Definitions
4
Rent This term refers to the Monthly amount of rent set out in Part B clause 5.
Resident, You, 
Your
This means the person or persons to whom this Tenancy is granted, as set out in Part B clause 
2.b. If this is a joint tenancy You all have Joint and Several Liability (see definition above).
Shared Areas The Shared Areas means those areas forming part of the Building which are intended for the 
common use and enjoyment of occupiers and visitors to the Building (or any part of it) and includes 
any terraces, gardens, corridors, paths, shared access, Building fascia and other facilities. 
Start Date The date and time upon which this Tenancy begins, as set out in Part B clause 4.
Tear Up Notice This has the meaning set out in Part I, clause 6.a(i).
Tear Up Period The period of two weeks commencing on and from the Start Date, as further set out in Part I, clause 
6.a
Tenancy This means the period during which You occupy the Premises, pursuant to this Agreement.
TDS The tenancy deposit scheme administered by The Dispute Service Limited.
Term This means for how long the Tenancy lasts (as set out in this Agreement) as shown in Part B clause 
4, which also sets out the Start Date and the End Date.
UNCLE 
Building 
This means another building managed by the Managing Agent under the UNCLE brand, as further 
set out in Part I, clause 7.a.
Working Day This means any day which is not a Saturday, Sunday, public or bank holiday in England and Wales.
2019 Act This means the Tenant Fees Act 2019, and all associated regulations, as may be amended, reenacted or otherwise re-issued from time to time.
2. The terms of this Agreement will be interpreted in accordance with the following principles:
a. Any requirement for a party to this Agreement not to do any act or thing includes a requirement not to allow 
such act or thing to occur.
b. A reference to statute (e.g. an Act of Parliament) or statutory provisions (e.g. a section within an Act of 
Parliament) is a reference to it as it is in force for the time-being, taking account of any amendment, extension 
or re-enactment of the law concerned.
c. References to a Part or clause are to Parts or clauses in this Agreement. 
d. Any requirement for the Landlord to do an act will be treated as satisfied if the Managing Agent does such act 
on the Landlord’s behalf.


### Main terms of the Agreement

1. Date on which this Agreement is made:
The date entered next to the signature blocks in Part C (or the latest of the dates where the date for each 
party is not the same).

2. The parties to this Agreement are:
a) the Landlord As set out in Part A.
Address: As set out in Part A.
Email address: colindale@uncle.co.uk
b) You (the tenant): Kamlesh Kailas Dhondge 
(“Lead Resident”)
Address: 203 Wem Tower
1 Harrow Road
London
HA9 6FA
Email Address kamlesh.dhondge@gmail.com
The Resident may request the Managing Agent’s written Permission for any Dependants to also live at the Premises 
during the Tenancy. Permission must be obtained prior to any Dependants living at the Premises.

3. The Premises and the Building:
FLAT 6, ASTRAL HOUSE, 5 AERIAL SQUARE, LONDON, NW9 4FZ
The Resident has the right to use the Shared Areas, subject to the rules which apply thereto.
The Building is currently subject to a mortgage granted to a Lender.

4. The Term will:
 Begin On: 12th April 2023 at 5:00pm (or such other time as agreed between Us and You) (“Start 
Date”)
 End On: 30th April 2024 at 10:00am (“End Date”)
(unless this Agreement is terminated early in accordance with Part I).

5. The Rent: £1,753.00 every Month
Your first Rent payment in the amount of £1,095.02 will cover the period from 12th April 2023 to 30th April 2023 
and is due in cleared funds in Our bank account no later than five Working Days before the Start Date.
After the first payment You must pay the Rent on the first day of every Month by standing order (to cover the Month 
until the next payment) throughout the Term.
You must pay the Rent to Our bank or Our Managing Agent’s bank. When making payment you must include your 
unique tenant reference: t0010353. This will assist us in correctly identifying and allocating your money.
The details of the bank account into which You should make Your payments of Rent (until We inform You otherwise) 
are:
Bank: HSBC Bank Plc UK
Account name: IV Three LP 
Account number: 91383493
Sort Code: 401160
IBAN: GB55 HBUK 4011 6091 3834 93
SWIFT/BIC: HBUKGB4B


6. Your Deposit in the amount of £2,022.00 must be paid to Us upon You signing this Agreement. Following Our receipt, 
the Deposit will be transferred and protected in the TDS custodial scheme. The prescribed information relating to the 
Deposit it set out in Attachment 1 to this Agreement. Where there is more than one Resident, each Resident agrees 
to nominate Kamlesh Kailas Dhondge (“Lead Resident") for the purpose of managing the Deposit.

7. Our Managing Agent's name:
Realstar Management (UK) Limited
Address: 
1st Floor, 7a Howick Place
London SW1P 1DZ
The emergency contact details of the Managing Agent will be provided to the Resident on or around the Start Date

### Signatures
The clauses in Part B set out the Rent You have agreed to pay and the length of the Tenancy, Our (as the Landlord) 
and Your (as the Resident) details, the Premises this Agreement applies to and the Deposit You have agreed to pay.
The clauses in Parts D to J set out Your and Our responsibilities under this Agreement.
By law, You must comply with the terms in this Agreement once You and We have signed and dated this Agreement.
Important - by signing this Agreement below, You agree that You have read and accept the full conditions of 
Your Tenancy and have read the entire contents of this Agreement before signing it.
Your signature (the Resident):
Kamlesh Kailas 
Dhondge Signature: ............................................. Date:……………………..
Our signature (for and on behalf of the Landlord or the Managing Agent on the Landlord’s behalf):
................................................. (signature) ................................................. date


###. General clauses

1. Housing Act 1988
This Agreement is for an assured shorthold tenancy as defined in Section 19A of the Housing Act 1988 as amended 
by the Housing Act 1996. Section 21 of this Act sets out the conditions under which We can end this Tenancy and 
take the Premises back. Further provisions relating to this are set out in Part I.


2. Our address for serving notices
Section 48 of the Landlord and Tenant Act 1987 says We must give You an address where You can serve a notice 
(or notices) on Us if You need to in relation to this Agreement. Please use Our Managing Agent's address shown in 
Part B clause 7, or Our address (set out in the definitions) if We do not use a Managing Agent at the time You wish 
to serve a notice on Us.

3. Serving notices properly
    a. If We serve a notice under this Agreement or pursuant to statute, We will treat it as being served properly if it is 
delivered by hand or sent by email or recorded or registered delivery to the email address or address set out in Part 
B. If it is delivered by hand, it will be treated as being served on the day it is delivered (or, if such day is not a Working 
Day, the next Working Day). If delivered by email, it will be treated as served when the email is acknowledged by 
You (auto-responses shall not be treated as Your acknowledgement) and if it was sent by recorded or registered 
delivery, it will be treated as having been served on the day the relevant records show it was delivered. If a notice is 
not served properly it will not be valid. In the case of joint tenants, We may serve notice to the Lead Resident only 
which will constitute valid notice to all joint tenants.
    b. If You serve a notice under this Agreement, You may do so by delivering it by hand or sending it by email or recorded 
or registered delivery to the email address or address set out in Part B. If it is delivered by hand, it will be treated as 
being served on the day it is delivered (or, if such day is not a Working Day, the next Working Day). If delivered by 
email, it will be treated as served when We acknowledge the email (auto-responses shall not be treated as Our 
acknowledgement) and if it was sent by recorded or registered delivery, it will be treated as having been served on 
the day the relevant records show it was delivered. If a notice is not served properly it will not be valid. In the case 
of joint tenants, all notices must be sent by the Lead Resident (unless it is expressly stated that notice from each joint 
tenant is required) – in the case of notices sent by hand, recorded delivery or registered delivery, this means that the 
Lead Resident must sign the notice and in the case of emails, the Lead Resident must send an email to Us in order 
for the notice to be valid.

4. Data protection
    a. In this clause, the terms “controller” and “personal data” shall have the meanings set out in the Data Protection Laws.
    b. For the purposes of this Agreement We shall act as controller in relation to Your personal data concerning the subject 
matter of this Agreement. 
    c. Each party will comply with its obligations under all relevant Data Protection Laws at all times in relation to this 
Agreement. 
    d. We will process Your personal data for the purposes of the subject matter of this Agreement and in compliance with 
applicable laws and regulations. In particular, You authorise Us to provide Your personal data to the Managing Agent, 
referencing companies, utility providers (and we may also request from such providers personal data relating to Your 
account with them), the local authority, online tenancy processing agents, the TDS, the Lenders, auditors and any 
other party in connection with the provision of services to You under this Agreement. Your personal data will be 
used in order to undertake credit referencing, to check Your identity (including searching the electoral roll and 
complying with the right to rent provisions of the Immigration Act, 2014, as amended, replaced or re-enacted from 
time to time), and to perform other searches and enquiries that may be necessary for the purposes of this Agreement. 
It is acknowledged by the parties that the provision of this personal data is necessary for the performance of this 
Agreement and, if You do not provide the relevant personal data, it may not be possible for Us to fulfil Our obligations 
under this Agreement




### Resident’s responsibilities 


You agree to the following obligations and further agree that a failure to comply may give rise to Us incurring costs 
to remedy Your breach (such as the cost of repairs including contractor call-out charges) which will entitle Us to 
recover such costs from You or seek to deduct such amounts from the Deposit:

1. Rent and Deposit 
a. To pay the Rent each Month as set out in Part B, clause 5.
b. To pay the Deposit as set out in Part B clause 6.

2. To pay interest if Your Rent is late
To pay interest at 3% over the base rate of the Bank of England (calculated in accordance with the 2019 Act) on any 
Rent You owe which is more than 14 days late. If We charge this interest, You will pay interest from the date You 
should have paid the Rent until the date We actually receive it.

3. Not to withhold Rent
Not to withhold Your Rent or any other amounts due under this Agreement.

4. Bank charges
To pay any bank charges We are charged by Our bank if your standing order is cancelled or not paid for any reason. 

5. Council tax
To register with the council tax department or any other relevant office of the local authority and pay council tax for 
the Term to the local authority.

6. Transfer and pay gas, electricity, hot water, heating, phone charges and internet services
a. You must register (in Your name) with gas, electricity, water, sewerage, phone companies and internet services, 
where appropriate and pay all charges for these services in respect of the Term. You are also required to register (in 
Your name) with any provider of heating for the provision of hot water and/or heating for the Premises supplied from 
communal boilers which is billed based on the individual Premises metered usage with a fixed standing charge, and 
pay all charges for these services for the Term
b. When Your Tenancy ends, You must arrange for the utility/telecommunications companies to take final meter 
readings (if applicable) and issue the final bills to You for these services. You must not ask the companies to cut off 
the supply.
c. If any services referred to in this Part E clause 6 are disconnected during the Tenancy as a result of Your failure to 
pay the relevant supplier or Your request to cut off the supply, You must pay any applicable reconnection charges. 
d. Any overdue internet charges will be considered a breach of this lease and may be deducted from Your Deposit.
e. Any arrears of Rent may result in the internet services to the Premises being suspended until such arrears are settled.

7. Changing suppliers or installing payment meters
You must not install any coin operated, prepaid card or key operated meters at the Premises or change water, gas 
or electricity suppliers 
8. Television licence
a. You must pay the television licence, cable television or satellite television charges (if you have any of these) for the 
Term.
b. Part E, clause 38 sets out other obligations concerning television services.

. Costs
In addition to the costs We incur (such as the cost of repairs including contractor call-out charges), You must repay 
Our reasonable legal and other costs if We take any action against You for not paying any amounts You owe under 
this Agreement or if You do not comply with any of Your other responsibilities listed in this Agreement

10. Cleaning windows
You must clean, or have cleaned, all the windows and balcony doors (if applicable) forming part of the Premises 
which You can reasonably and safely reach (inside and out) at least once a Month and within the last 14 days before 
the end of the Tenancy.

11. Replace broken glass
You must pay for the replacement of all broken glass if the breakage was as a result of Your, Your Dependant’s or 
Your visitor's action or failure to act. 

12. Replace light bulbs
You must replace all fuses, bulbs and fluorescent tubes within the Premises when needed and make sure that all 
light bulbs and fluorescent tubes work at the end of the Tenancy.

13. Taking care of the Premises
You must keep the inside of the Premises and all Our Contents in good and clean condition and consistent with the 
state of the Premises as set out in the Inventory (subject to reasonable wear and tear).

14. Drains
You are responsible for unblocking and keeping all gutters, sewers, drains, toilet bowls, cisterns, basins, baths, 
showers, water pipes and ducts (and other fittings You have reasonable access to) within the Premises free from 
blockages and to take adequate precautions to avoid damage from the freezing and bursting of pipes.

15. Qualified contractors
You must not appoint any contractor, or other third party to carry out any of Your responsibilities to repair or maintain 
the Premises without Permission in writing from Us or Our Managing Agent. In the event that written Permission is 
granted, it is subject to You using an appropriately qualified contractor. You must pay for the cost of any call-outs to 
an emergency contractor if such emergency contractor deems the cause not to have been an emergency or if the 
emergency was caused by Your act or omission (or that of the Dependants or visitors).

16. Report faults
a. You must tell Us as soon as possible and in writing about any repairs or faults We are responsible for such as items 
set out in the Inventory. 
b. You may be legally responsible for any loss or costs relating to the Premises that We incur which are as a result of 
a repair or fault You do not tell us about. 
17. Allow Us access to Your home
a. During the Tenancy, as long as We give You at least twenty-four hours’ notice (except in an emergency when We 
are entitled to immediate access), You must allow Us, Our employees and/or Our appointed contractors into the 
Premises to:

24. Allowing viewings of the Premises
During the last two Months of the Tenancy, You must allow Us access to the Premises for the purposes of showing 
the Premises to potential residents. We will provide You with at least 24 hours’ notice of when such access is required 
and You will ensure the Premises are in a presentable, tidy condition.

25. How You can use the Premises
You must not:
a. use the Premises or the Building for anything illegal or immoral;
b. operate any registered trade or business from the Premises or Building;
c. in any way do anything that may vitiate any insurance on the Premises or the Building or otherwise increase the 
premium payable;
d. do anything at the Premises or the Building (including playing any radio, television, electronic device or musical 
instrument) which causes a nuisance to or annoys Us or Your neighbours or which might reasonably be considered 
to be antisocial behaviour. In particular, You must not play music or operate any equipment or machinery (such as 
a vacuum cleaner) which can be heard outside the Premises between 11:00pm and 8:30am; 
e. keep any animals, reptiles, insects, rodents or birds at the Premises unless, in the case of dogs and cats only, (i) 
the Premises are on a designated ‘pet floor’ as advised by the Landlord or the Managing Agent, (ii) You have 
completed an application form for Your proposed dog or cat which has been successful, such application form to be 
determined in Our absolute discretion and any consent may be subject to conditions and (iii) the keeping of a dog 
or cat in the Premises will at all times be subject to the pet policy applicable to the Building from time to time. If You 
are permitted to keep a pet then You further acknowledge and agree that pets are not allowed at any time in the 
Shared Areas other than to get to and from the Premises; and/or
f. keep, place or store any materials, substances or other item of a dangerous, inflammable, combustible, explosive, 
corrosive or offensive nature in the Premises or any part of the Building or contaminate the Premises or the 
Building (or any part thereof) with any such materials, substances or items. 
You must only use the Premises as Your and Your Dependants' only or principal home and You must inform Us 
promptly if the Premises cease to be Your only or principal home.

26. Not change locks, lost keys, sharing keys
a. You must not change or install any locks or locking mechanism on any doors or windows at the Premises or the 
Building, or procure any keys, fobs or key card for any locking mechanism without Our Permission in writing. 
b. If You lose the keys, fobs or key card to the Premises or the Building, You must pay Us the reasonable costs 
incurred by Us or Our Managing Agents for replacing the keys, fob or key card (including contractor call-out 
charges).
c. You must not provide Your keys, fobs or key card to anyone else without Our or Our Managing Agent’s prior 
consent.

27. Not alter the Premises
You must not make any alteration or addition or redecorate the inside or outside of the Premises in any way without 
Permission in writing from Us or the Managing Agent. 

28. Not damage the Premises, Shared Areas or the Building 
a. You, Your Dependants and Your visitors, must not damage the Premises, Shared Areas or the Building, or allow 
anyone else to damage them. 
b. You must promptly advise Us of any damage to the Premises, the Shared Areas or the Building so that We can 
make repairs and You will reimburse Us for the cost of such repairs where the damage was caused by Your 
negligence, breach of this Agreement or misuse (or that of Your Dependants or visitors). 
Without limiting Part E clause 28.a, You must not use the Premises in such a way as to cause damage to the floors 
in the Premises. Your obligation extends to preventing anyone wearing high heels in the Premises. Such damage 
will not be treated as fair wear and tear and the cost of any remedial work, sanding or re-polishing will be borne by 
You.

29. Not damage installations
You must not do anything to the electrical, lighting, water or heating installations or fixtures or any of the kitchen units 
and appliances or sanitary fittings or any other Contents. You must not remove these items from the Premises or the 
Building. You also must not do anything to the heat installations and equipment in the Building and/or the estate of 
which the Building forms part.

30. Not smoking
You must not smoke (including e-cigarettes and vape pens) within the Building, including the Premises (including any 
balcony) and the Shared Areas and any breach of this prohibition will be considered a fundamental breach of this 
Agreement. You must also ensure that any Dependant, guest, invitee or contractor of Yours observes this rule. Any 
damage or detriment caused by a breach of this rule will not be treated as fair wear and tear and the cost of any 
repair, re-decoration or fumigation that results from a breach of this rule will be borne by You (including contractor 
call-out charges).

31. No barbecues or naked flame
You must not have barbecues or naked flames within the Premises or on any balcony to the Premises or within the 
Shared Areas.

32. Balconies and outdoor space
You must not store any items on any balcony and outdoor spaces other than tables and chairs. Any planting or 
shrubbery must be tended and maintained as it was at the start of Your Tenancy. 

33. Not transferring Your legal rights
a. You must not allow anyone to live at the Premises with You (other than Dependants that We have approved in 
writing), sublet or transfer this Tenancy to anyone else or take in lodgers, without first getting Our or Our Managing 
Agent's Permission in writing. The giving of such Permission will be limited to once in a twelve-month period.
b. If We or the Managing Agent gives You Permission, You must pay the costs permitted by the 2019 Act (as at 1 
June 2019, such amount being £50 inclusive of VAT, for a change to a sharer or an assignment) for preparing the 
documents to transfer or otherwise amend this Agreement. You will continue to be responsible for all Your 
responsibilities in this Agreement until a new agreement has been signed by all the parties to it.
c. You must not advertise or market the Premises (or any part of the Premises) for occupation of any kind during the 
Tenancy (including on a short-term basis and including through the use of websites such as www.Airbnb.co.uk/ and 
www.spareroom.co.uk). 

34. Empty Premises
You must not leave the Premises empty for any continuous period of more than 14 days, without telling Us first. If 
You plan to leave the Premises empty for more than 28 days, You must leave a key with Us or Our Managing Agent 
in case there is an emergency where We or Our Managing Agent may need to get into the Premises.

35. Securing the Premises
You will not leave the Premises empty, vacant, unoccupied or unattended without fastening securely all deadlocks or 
other locks and bolts fitted to doors and windows and leaving set the security alarm (if any) at the Premises. You 
must also inform the Managing Agent if You will be away from the Premises for 14 days or longer during the Tenancy

36. Harassment
You and anyone visiting the Premises must not cause or subject anyone within the Building to harassment that 
would reasonably be expected to cause offence, fear or interfere with a person.

37. Not place notices on the Premises
You must not place any sign, poster, sports equipment or item of laundry on the Premises which can be seen from 
the outside.

38. Not fix an aerial or satellite dish
You must not fix any aerial or satellite dish on the Premises or the Building or install cable television or telephone 
cables without first getting Our or Our Managing Agent's Permission in writing. If We or Our Managing Agent give 
You Our written Permission You must pay all the costs involved (including removing an aerial or dish at the end of 
the Tenancy) and the reasonable costs of making good any damage or redecorating, if necessary.

39. Not fix blinds to, or darken any windows
a. You must not fix blinds to the windows of the Premises unless We or Our Managing Agent have already given You 
Our Permission in writing. If We or Our Managing Agent do give Our Permission, We may ask You to remove the 
blinds and repair any damage at the end of the Tenancy.
b. You must not darken or obscure any windows or lights on the Premises.

40. Our Contents
You must not remove the furniture, equipment and belongings shown in the Inventory from the Premises without 
getting Our or Our Managing Agent's Permission in writing first.


41. Shared Areas
You must not:
a. block any Shared Areas, including hallways and staircases, or keep any bicycle, pushchair or other item in any 
Shared Area or other part of the Building; or 
b. hang any clothes or other items on the outside of the Premises or in any Shared Area, without first getting Our 
written Permission or that of Our Managing Agent.


42. Cycle store
You will not allow the cycle parking area to be used for any purpose other than for the parking of pedal cycles. Each 
of the Landlord and the Managing Agent do not accept any liability for any loss, damage or theft of bikes from the 
cycle store or anywhere else in the Building. 


43. Fix items to walls
You may fix a reasonable number of picture hooks, posters, pictures, photographs or ornaments to the walls, or as 
otherwise agreed by Us or Our Managing Agent in writing with nails, glue, sticky tape or blue-tack. You must pay to 
Us the reasonable costs of repairing any unreasonable damage, marks or holes caused by, or as a result of, removing 
any fixings.


44. Washing machines and tumble dryers
You agree that You cannot make any claim against Us or the Managing Agent for any compensation for any loss or 
inconvenience caused as a result of the washing machine or the tumble dryer (if You have one) breaking down and/or 
damaging Your belongings.

45. Claims for food in Your freezer
You agree that You cannot make any claim against Us or the Managing Agent for any compensation for any loss or 
inconvenience You suffer if the fridge or freezer (if You have either or both of these) breaks down and/or causes 
Your food to thaw or become unfit to eat.

46. Claims relating to lifts in the Building
You agree that You cannot make any claim against Us or the Managing Agent for compensation if:
a. a lift in the Building cannot be used or breaks down;
b. You or someone else has an accident caused by a lift; or
c. the lift stops working.

47. Other claims
You agree that You cannot claim against Us or the Managing Agent for compensation for:
a. any damage that Our agents, workmen or other staff cause;
b. a fault in any pipes, staircase or anything in the Premises, Shared Areas or Building;
c. anything which any caretaker in the Building does or does not do;
d. any inconvenience You suffer when We carry out work to the Premises, the Shared Areas or the Building (including 
work to premises next door or buildings We own nearby), such as decorating or carrying out repairs or alterations;
e. any loss or inconvenience You suffer as a result of loss of power or access to the internet; 
f. any effect that the lift has on Your television or other electrical equipment;
g. any work required to the Premises, Shared Areas or Building which a third party is contractually or legally obliged to 
carry out and that We are therefore not able to undertake ourselves; or 
h. any deliveries made for You at the Building. We are pleased to offer a parcel room to You for delivery (by recognised 
delivery companies) and collection (by You) of parcels. We will provide a controlled entry system, complete with 
kiosk-type entry controls, parcel tracking, parcel notifications and reporting. Although every effort is made to ensure 
the security of the parcels, neither Us or Our Managing Agent shall be liable for any loss to, theft of or damage to 
such parcels whilst stored in the parcel room or otherwise.

48. Notices
You must give Us, or Our Managing Agents copies of, and take all necessary steps to comply with any notices, 
documents, proceedings or letters which relate to the Premises as soon as You receive them.

49. Infestations
During the Tenancy You must take reasonable measures to keep the Premises free of vermin (for example, mice, 
rats), fleas or parasites, and You must advise Us immediately of any such infestation or of wood boring insects, wet 
or dry rot. If the Premises become infested because of something You have or have not done You will have to pay 
the appropriate costs of putting this right and cleaning any parts of the Premises which are affected and any Shared 
Areas where the infestation or other problem has been caused by Your breach of this clause. 


50. Payments made on Your behalf
If someone else pays Us Rent on Your behalf, We will use this money in relation to this Tenancy only. In no 
circumstances will We use this money to create a new tenancy for any other person.

51. Right to rent 
You will ensure that, throughout the Term, You continue to have the right to rent pursuant to the provisions of the 
Immigration Act 2014 (as may be amended or replaced from time to time).
At the end of the Tenancy
52. When the Tenancy ends
a. You agree to vacate the Premises and remove all Your belongings before 10:00am on the End Date (or before 
10am on such earlier date of termination).
b. You must return the Premises, Contents and the items listed in the Inventory in the same condition and state of 
repair (excluding reasonable wear and tear) and cleanliness they were in on the Start Date, including:
i. leaving the Premises cleaned to a professional standard. If You want Us to organise a professional clean on Your 
behalf, You agree to pay Us the cost of this. The Premises being cleaned to a professional standard includes 
washing or dry cleaning (including ironing and pressing) all linen, bedspreads, blankets, curtains, upholstery and 
soft furnishings and other items set out in the Inventory and cleaning any carpets shown in the Inventory (if they 
have been marked during the Tenancy);
ii. repairing any damage to the Premises or to Our Contents listed in the Inventory (including replacing them, if 
necessary) if You, Your Dependants or one of Your visitors caused the damage;
iii. repairing any wall or other surfaces on which You have hung photographs, pictures, posters, ornaments and so on 
and where We agree with You that We will undertake such repairs on Your behalf, You agree to pay Us the cost of 
this or that the cost can be deducted from the Deposit;
iv. leaving all items listed in the Inventory in the same rooms as they were in when You moved in; and 
v. paying the cost of redecorating any rooms or any part of the Premises which you decorated or changed without Our 
written Permission which We shall seek to deduct from the Deposit, including the costs of any contractors (including 
call-out charges) We may use, and if You fail to comply with any part of this Part E clause 52.b, We will seek to 
deduct the cost of remedying Your breach from the Deposit (including costs of any contractors We may use).
c. You must arrange for any electricity, gas, water and phone meters, where appropriate to be read immediately 
before the end of the Tenancy and pay all outstanding amounts You owe the companies who provide these 
services (including cable television) up to and including the day the Tenancy ends. You must arrange for all 
accounts of these services to be addressed to the Landlord from the day immediately after the Tenancy ends.
d. You must arrange to return any television or other equipment or appliance You have hired or rented to the company 
You rented it from.
e. You must give the Premises back to Us and return the keys, fobs and key cards to the Premises at the end of the 
Tenancy to the place or person We have agreed with You.
f. You must remove Your personal belongings and any rubbish from the Premises. You also agree that if You leave 
any personal belongings in the Premises as at the end of the Tenancy, We can choose to either:
i. remove and dispose of any of Your belongings You leave in the Premises after the end of the Tenancy; or
ii. charge You Rent at the rate set out in this Agreement until you remove your personal belongings and hand back all 
the keys to the Premises and the Building.
g. You must pay to Us any extra costs We have to pay if We cannot check the Inventory until You have removed Your 
personal belongings, and We shall seek to deduct such amounts from the Deposit.
h. If You do not comply with any provision of Part E clause 52, We will seek to deduct from the Deposit at the end of the 
Tenancy all the costs of rectifying such breach, including the cost of contractors We may use, including call-out 
charges

### Landlord’s responsibilities

We agree to do the following:

1. Cleaning
We will make sure the Premises are cleaned to a professional standard before Your Tenancy starts at 5:00pm on the 
Start Date.

2. Other payments for the Premises
We will pay ground rents and service charges, where applicable.

3. Not increase the Rent
We will not increase the Rent (as shown in Part B, clause 4) within the Term. Any renewal of this Agreement will be 
subject to a new agreement which will be signed by You and Us and which will set out the rent applicable during the 
renewal term.

4. Our appliances
We will take reasonable steps to make sure the gas and electrical appliances, and other similar mechanical 
appliances in the Premises for which We are responsible, work properly. 

5. Repairs
a. Section 11 of the Landlord and Tenant Act 1985 as amended by Section 116 of the Housing Act 1988 applies to 
this Agreement. This means that We are responsible for repairing and maintaining the installations in the Premises 
which supply water, gas and electricity, and any sanitary ware (basins, sinks, baths, toilet bowls, cisterns, showers 
and so on), but not other fixtures, fittings and appliances for using water, gas or electricity. We will repair and 
maintain the installations in the Premises for general heating, cooking and heating water. We will take account of 
the age, character and life of the Premises and the area they are in to decide what level of repair We need to carry 
out.
b. We will carry out any repairs required from time to time to the Shared Areas or any part of the Shared Areas.

6. What We do not have to repair
We are not responsible for repairing:
a. anything which You are responsible for repairing;
b. the Premises, if they are totally destroyed or damaged by a storm or flood; or
c. Your contents.

7. Quietly enjoying the Premises
We will provide You with possession of the Premises from the Start Date and thereafter during the Tenancy We will 
not interrupt or interfere with Your lawful occupation, enjoyment and use of the Premises other than in an emergency 
or in the normal and lawful process of exercising or implementing Our rights and obligations under this Agreement 
having provided at least a minimum of 24 hours’ notice.

8. Insurance
We will take reasonable steps to ensure that the Building and Our Contents (if any) are insured for any amounts We 
feel appropriate. We will endeavour to ensure that the Building is insured against fire and other risks normally covered 
by a comprehensive insurance policy and any other risks We consider necessary. We will not insure Your belongings 
or liability and refer You to Your obligations relating to insurance set out in Part E, clause 23.

9. If You cannot live in the Premises - suspending your Rent
If Our insurers consider that You cannot live in the Premises because of damage to them or the Building by any 
insured risk and the damage is not Your fault, or they have not been damaged as a result of something You have or 
have not done (We call this negligence), You will not have to pay any Rent until You can live in the Premises again. 


10. Not paying You compensation
We will not pay You any compensation if You cannot live in the Premises and We have told You that You do not have 
to pay Us Rent until You can live in the Premises again. Us or Our Managing Agent will inform You of the duration 
of the Rent suspension following Our assessment of the Premises.

11. Suspending part of the Rent
If You cannot live in or use part of the Premises, depending on the extent of the area which cannot be used, We may 
agree to a proportionate reduction of the Rent until the whole Premises are fit to live in again. We or Our Managing 
Agent, will inform You if any such reduction will be given and, if so, the amount by which the Rent will be reduced 
and the duration of such Rent reduction.

### Inventory and Condition of the Premises

We and You agree to the following:

1. Producing an Inventory
We will be responsible for arranging an Inventory.

2. Accepting the Inventory
a. If You do not come to the appointment to check the Inventory, We will assume that You agree to the Inventory and 
description of the condition of the Premises as being a true and full record of the Contents and condition of the 
Premises at the Start Date.
b. If You do check the Inventory and provide Us with written comments or amendments to it which We agree with, Your 
comments and amendments will form part of the Inventory for the purposes of this Agreement.
c. If You do not provide Us with written comments or amendments to the Inventory within 7 days of being provided with 
it, the Inventory will be deemed to be approved and accepted by You.

3. Checking the Inventory
At the end of the Tenancy, We will check the Inventory, or arrange for it to be checked by a third party. If You do not 
keep an appointment to check the Inventory You must accept what We or they find when We check the Inventory.

### Protecting Your Deposit

Your Deposit is protected by The Dispute Service Limited (the TDS), PO Box 1255, Hemel Hempstead, 
Hertfordshire, HP1 9GN, Telephone No. 0300 037 1001.

1. Purpose of the Deposit

The Deposit has been taken for the following purposes:
a. any damage, or compensation for damage, to the Premises, its Contents, the Shared Areas or the Building, or for 
missing items for which the Resident may be liable, subject to an apportionment or allowance for fair wear and tear, 
the age and condition of each and any such item at the commencement of the Tenancy, insured risks and repairs 
that are the responsibility of the Landlord;
b. the reasonable costs incurred in compensating the Landlord for, or for rectifying or remedying any breach by the 
Resident of the Resident's obligations under this Agreement including those (i) relating to the cleaning of the 
Premises, (ii) its Contents and (iii) the Resident’s obligations to remove its personal belongings upon vacating the 
Premises;
c. any unpaid accounts for utilities or water charges or environmental services or other similar services or council tax 
incurred at the Premises for which the Resident is liable;
d. any Rent or other money due or payable by the Resident under this Agreement of which the Resident has been 
made aware and which remains unpaid after the end of the Tenancy; and
e. any costs of contractors arising during the Tenancy as a result of a breach by the Resident of its obligations in this 
Agreement.
2. Changing Residents during the Tenancy
We will not have to refund the Deposit or any part of the Deposit before the end of the Tenancy if one or more of the 
Residents move out. If there are joint Residents and one moves out, it is the responsibility of the other Residents to 
let us know.

3. At the end of the Tenancy

a. Notice of amounts We plan to take from Your Deposit
The Landlord or Managing Agent must tell the Resident as soon as practicable following the end of the Tenancy if 
they propose to make any deductions from the Deposit.
b. Giving You back Your Deposit
If there is no dispute, the Landlord or Managing Agent will keep or repay the Deposit, according to the agreed 
deductions and the conditions of this Agreement. Payment of the Deposit or any balance of it will be made within 10 
Working Days of the Landlord and the Resident agreeing the allocation of the Deposit.
c. Disputes
The Resident will inform the Landlord or Managing Agent in writing if the Resident intends to dispute any of the 
deductions proposed by the Landlord or the Managing Agent as due from the Deposit within 20 Working Days after 
the earlier of (i) the End Date; and (ii) termination of the Tenancy prior to the End Date. ADR may regard failure to 
comply with the time limit as a breach of the TDS rules and if the ADR is later asked to resolve any dispute may 
refuse to adjudicate in the matter.
d. If We or You cannot sort out the dispute
If, after 10 Working Days following notification of a dispute by the Resident to the Landlord or Managing Agent and 
reasonable attempts having been made in that time to resolve any differences of opinion, there remains an 
unresolved dispute between the Landlord and the Resident over the allocation of the Deposit the dispute will, 
subject to the provisions of Part H clause 3.e. below, be submitted to the ADR operated by TDS for adjudication. All 
parties agree to co-operate with the adjudication.
e. Legal rights
The statutory rights of the Landlord and the Resident to take legal action through the county court remain unaffected 
by the clauses above

### Ending the Tenancy

on from Eviction Act 1977 protects You from Us ending Your Tenancy immediately. It says We must 
get a court order to repossess (take back) the Premises if You fail to comply with Your obligations under this 
Agreement and You have failed to put right or sort out the failure within a reasonable time.
b. If You are not sure about Your rights or You need more information to help You understand this clause, You should 
get advice from a solicitor or Your local Citizens Advice.

2. Mandatory grounds for grant of possession
A court will grant Us possession of the Premises (which ends the Tenancy) if any of the circumstances mentioned in 
the following grounds (reasons) set out in the Housing Act 1988 (as amended by the Housing Act 1996) applies:

Ground 2

Provided that at the start of the Tenancy the Resident was advised that the Landlord owns the Premises and that the 
Lender may have power of sale of the Premises or Building if the Landlord does not make his mortgage payments 
for the Premises or Building, the Lender becomes entitled to sell or possess the Premises.

Ground 8

At both the time that We give notice that We will start court proceedings and at the time of the court proceedings 
You are still:
a. at least eight weeks behind with Your Rent if You pay Rent every week or every fortnight;
b. at least two Months behind with Your Rent if You pay Rent every Month;
c. at least three Months behind with Your Rent if You pay Rent every three Months;
d. at least three Months behind with Your Rent if You pay Rent each year.

3. Possible grounds for grant of possession
The court might grant Us possession of the Premises (which ends the Tenancy) in the following circumstances:
Ground 10

At both the time We give notice that We will start court proceedings and at the time of the court proceedings You owe 
some Rent.

Ground 11
You have a history of often being behind with Your Rent.


.
Ground 15

The condition of the furniture or any other Contents has deteriorated because it has been badly treated by You or 
any other person living at the Premises.

Ground 17

We granted the Tenancy to You after You or a person acting on Your instructions gave a false statement.
If any of the above conditions apply to You, We may re-enter the Premises and the Tenancy will end.
However, if any of these conditions apply and You are living in the Premises, We will not repossess the Premises 
without getting a court order first.
Any action We take to repossess the Premises will not restrict or limit any other legal rights We may have.

4. Giving notice at the end of the Term
You must give Us at least two Months’ notice in writing when You want to end the Tenancy. The notice must not end 
before the End Date and must end on the day before the Rent is due (i.e. the last day of a calendar month). You will 
still be legally responsible for paying the Rent and for all other responsibilities under this Agreement until the notice 
period ends and You have moved out of the Premises.

5. Break Options
a. Other than as set out in Part I, clauses 6 and 7 (below), You must give Us at least two months’ notice in writing of 
the date You want to end the Tenancy on, if before the End Date, (“Early End Date”). In the case of joint tenants, 
each such individual must provide such notice to Us. The Early End Date:
i. Cannot be within the first six months of the Term;
ii. Must be on the last day of a calendar month; and 
iii. Cannot be a date between 30 November and 31 January (inclusive), as this is Our Christmas black-out period.
If You serve such a notice, You will still be legally responsible for all Your obligations under this Agreement until the 
Early End Date (subject to any provisions which survive termination).
b. Part D clause 3 of this Agreement details the methods for service of notice

6. UNCLE tear up promise 

a. You may terminate this Agreement within the first two weeks commencing on and from the Start Date (“Tear Up 
Period”) for any reason. If You wish to terminate during the Tear Up Period, then You must:
i. Email Us during the Tear Up Period at colindale@uncle.co.uk or such other email address as We notify You in 
writing, confirming that You wish to end this Agreement (“Tear Up Notice”). In the case of joint tenants, each 
such individual must provide such an email to Us;
ii. Vacate the Premises no later than 14 days from the date of the Tear Up Notice;
iii. Ensure that You pay for and be responsible for all Rent, council tax and utility costs (of any kind) relating to the 
Premises, until the day You vacate the Premises;
iv. Allow Us access to the Premises to remarket it for letting from 24 hours after we receive the Tear Up Notice; and 
v. Allow Us to use Your Deposit as necessary to settle any sums owed by You to Us pursuant to or in connection 
with this Agreement.

7. UNCLE right to relocate
a. You may serve notice to terminate this Tenancy and relocate (subject to availability) to another building managed by 
the Managing Agent under the UNCLE brand (“UNCLE Building”) if: 
i.You have been a Resident of the Premises for at least 2 months;
ii.You are in compliance with the terms of this Agreement and have not exercised a similar right to relocate from an UNCLE 
Building within the last 12 months;
iii.You email Us at colindale@uncle.co.uk or such other email address as We notify You in writing, confirming that You 
wish to relocate (“Relocation Notice”) and the date on which You wish to relocate, which cannot be less than two 
months from the date of the Relocation Notice and must be on the final day of a calendar month. In the case of joint 
tenants, each such individual must provide an email to Us. We will then confirm to You if there is availability in the 
UNCLE Building You wish to relocate to and any relocation will be subject to satisfactory referencing being completed;
iv. If We confirm that We have availability in the UNCLE Building and You satisfy Our referencing process, simultaneously 
with terminating this Agreement, You enter into another assured shorthold tenancy agreement for premises within an 
UNCLE Building for not less than 12 months; and (2) pay Us a fee of £250 plus VAT to cover Our reasonable costs 
arising from the early termination of this Agreement.
v.You sign all documentation and make all payments as may be required for the tenancy in the UNCLE Building;
vi.You ensure that You pay for and be responsible for all Rent, council tax and utility costs (of any kind) relating to the 
Premises, until the day You vacate the Premises;
vii.You allow us access to the Premises to remarket it for letting from 24 hours after we receive the Relocation Notice; and
viii.Allow Us to use Your Deposit as necessary to settle any sums owed by You to Us pursuant to or in connection with this 
Agreement.

### Special terms for the Tenancy

Section J1

1. Heating and Hot Water
Further to Part E clause 6 (Transfer and pay gas, electricity, hot water, heating and phone charges), You acknowledge 
and understand that heating and hot water at the Premises are provided by a communal system. You agree to enter 
into an agreement with the company that We or Our Managing Agent directs, effective for the Term of the Tenancy, 
for the provision of heating and hot water to the Premises by signing a residential supply agreement (on standard 
terms and conditions) within 14 days from the Start Date with all monies due under the provisions of that agreement 
paid as if it they were rent. For the further avoidance of doubt, if the Resident fails to pay monies due under the terms 
of that agreement, such arrears will be treated as Rent arrears which may result in the Landlord taking action against 
the Resident for breach of contract and possession. We may seek to deduct the amount of any arrears existing at 
the end of the Tenancy from the Deposit.

2. Ventilation System
Notwithstanding and subject to the provisions contained within this Agreement, including but not limited to the 
provisions of Part E clause 21 (Prevent condensation and frost damage), the Landlord confirms and the Resident 
understands that the Premises are fitted with a ventilation system to ensure the removal of moist stale air and a 
constant supply of fresh air without the need for the opening of windows. The Resident agrees to ensure the system 
is kept running at all times and used in accordance with the manufacturer’s instructions, including but not limited to 
the regular cleaning of the filters and replacing the filters once a year and ensuring that when bathing and showering 
that the bath/shower room door is closed to enable moisture to be efficiently extracted and the maximum amount of 
energy recovered.

3. Shared Terrace and other communal facilities 
Notwithstanding and subject to the provisions contained within the Tenancy, including but not limited to the provisions 
of Part E clauses 18 (Regulations for Managing the Shared Areas) and 25 (How You can use the Premises), the 
Landlord confirms and the Resident understands that at the discretion of the Landlord a communal terrace is provided 
for the reasonable use of the occupiers of the Building between the hours designated for use from time to time by the 
Managing Agent. It is further understood that the use of barbecues and the playing of amplified music is strictly 
prohibited on the terrace. Smoking on the terraces, as with all Shared Areas, is strictly prohibited under the Smokefree (Premises and Enforcement) Regulations 2006. Should this facility, or any other communal facility in the Building, 
be withdrawn, curtailed or become unavailable, the Landlord will not be liable to compensate the Resident for lack of 
use or to provide use of alternative facilities. Use of any communal gym is at Your own risk.

4. Parking 
i. Please note that it is the council’s policy that residents of the estate of which the Building forms part are excluded 
from obtaining resident and visitor parking permits allowing them or their visitors to park their vehicles within the 
Colindale controlled parking zone in which the Building is located; and 
ii. intended occupiers of the Building (or any person having any connection whatsoever or relationship with any such 
occupier whether contractual, personal or otherwise and who is resident at the Building) shall not be entitled to 
any form of permit from the council which would allow them to park any motor vehicle within the controlled parking 
zone. 
iii. We will not be responsible for any restrictions imposed by the council on a car used by You.

Section J2

1 This Section J2 shall apply where the Resident:

1.1 is not an individual or individuals; or

1.2 does not occupy the Premises as his only or principal home.
Effect of this Section J2
2 Where this Section J2 applies, the parties agree and declare that this Tenancy is not an Assured Shorthold Tenancy 
and is instead a common law tenancy. 
Holding the Deposit where the Tenancy is not an Assured Shorthold Tenancy
3 Notwithstanding the declaration in Section J2 clause 2, the Landlord confirms that it will use reasonable endeavours 
to hold the Deposit (insofar as permitted to by the TDS) in accordance with the requirements of Part H. Should the 
TDS at any time refuse to deal with the Deposit on the grounds that this Tenancy is not an Assured Shorthold Tenancy 
the parties agree that the Landlord shall be under no obligation to protect the Deposit in the manner described above 
and Part H (Protecting Your Deposit) shall be deemed deleted and replaced with the following clauses:

1.1 The Deposit has been taken for the following purposes:
a. any damage, or compensation for damage, to the Premises, its Contents, the Shared Areas or the Building, or for 
missing items for which the Resident may be liable, subject to an apportionment or allowance for fair wear and tear, 
the age and condition of each and any such item at the commencement of the Tenancy, insured risks and repairs 
that are the responsibility of the Landlord;
b. the reasonable costs incurred in compensating the Landlord for, or for rectifying or remedying any breach by the 
Resident of the Resident’s obligations under this Agreement including those (i) relating to the cleaning of the 
Premises; (ii) its Contents and (iii) the Resident’s obligations to remove its personal belongings upon vacating the 
Premises;
c. any unpaid accounts for utilities or water charges or environmental services or other similar services or council tax 
incurred at the Premises for which the Resident is liable;
d. any Rent or other money due or payable by the Resident under this Agreement of which the Resident has been made 
aware and which remains unpaid after the end of the Tenancy.

1.2 We may seek to deduct and retain a portion of the Deposit in the event that any of the situations referred to in Part H 
clause 1.1 arise during the Term.

1.3 In the event that We have had to use all or part of the Deposit for the purposes referred to in Part H clause 1.1, You 
must, upon Our written request, restore the Deposit to the agreed amount (set out in Part B clause 6) that was taken 
at the outset of the Tenancy within 14 days from the date Our request is made.

1.4 We (or the Managing Agent) must tell You within 10 Working Days following the end of the Tenancy if We (or Our 
Managing Agent) propose to make any deductions from the Deposit.

1.5 If there is no dispute, We (or Our Managing Agent) will deduct the appropriate amounts (if any) from the Deposit, 
according to the agreed deductions and the conditions of this Agreement. Payment of the Deposit or any balance of 
it will be made within 10 Working Days the agreement of the allocation of the Deposit between Us (or Our Managing 
Agent) and the Resident.

1.6 You will inform Us (or Our Managing Agent) in writing if You intend to dispute any of the deductions regarded by Us 
(or Our Managing Agent) as due from the Deposit within 20 Working Days after the end of the Tenancy.

1.7 If the amount We plan to take from Your Deposit is greater than £5,000.00 and a dispute has arisen regarding this 
deduction, formal arbitration must be used. The appointment of the TDS arbitrator will incur an administration fee 
which will be shared equally between Us and You; the liability for any subsequent costs will be dependent upon the 
award made by the TDS arbitrator.

1.8 If the monies lawfully due to Us under this Agreement are more than the Deposit held, You will be liable to pay any 
excess to Us within 14 days of written demand.
Ending the Tenancy where the Tenancy is not an Assured Shorthold Tenancy
4 On the basis that this Tenancy is a common law tenancy and not an Assured Shorthold Tenancy the parties agree 
and declare that the contents of Part I (Ending the Tenancy) shall be deleted and replaced with the following clauses 
of this clause 4:

1.1 We are entitled to repossess the Premises, and this Tenancy will end immediately, if You:
a. do not pay all or any of the Rent 14 days after it was due, whether or not We have formally asked You to pay it;
b. do not comply with any significant provision of, or major responsibility in, this Agreement;
c. have a bankruptcy order made against You or Your Guarantor (if any), or You transfer Your estate or sign any deed 
of arrangement for the benefit of Your creditors;
d. are a company, enter into liquidation whether compulsory or voluntary or enter into administration or have a receiver 
appointed over all or any part of Your assets; 
e. enter into or make a proposal to enter into a voluntary arrangement pursuant to the Insolvency Act 1986 or any other 
enactment or any other arrangement or composition for the benefit of Your creditors; or
f. leave the Premises and do not mean to return.

1.2 The Protection from Eviction Act 1977 protects You from Us ending Your Tenancy immediately. It says We must get 
a court order to repossess (take back) the Premises if You fail to comply with Your obligations under this Agreement 
and You have failed to put right or sort out the failure within a reasonable time.

1.3 If You are not sure about Your rights or You need more information to help You understand this clause, You should 
get advice from a solicitor or Your local Citizens Advice.

1.4 If and whenever during the Term any of the events referred to in Part I clause 1.3 occurs, We may commence 
proceedings to obtain a court order to recover possession and re-enter the Premises subject to:
a. In the case of unpaid Rent, Your right to relief on payment of the arrears and costs; and
b. In the case of a breach of any obligation other than to pay Rent, to Our obligations to serve notice on You specifying 
the breach complained of, requiring its remedy if it is capable of remedy, and requiring You to pay compensation in 
any case, and to allow the Resident a reasonable time to remedy a breach that is capable of remedy.

1.5 On the making of a court order for possession, this Agreement shall cease absolutely, but this shall not affect any 
rights or remedies that may have accrued to the Landlord against the Resident or to the Resident against the Landlord 
in respect of any breach of this Agreement, including the breach in respect of which the possession is ordered.

1.6 Any action We take to repossess the Premises will not restrict or limit any other legal rights We may have.

1.7 You must give Us at least two Months’ notice in writing when You want to end the Tenancy. The notice must not end 
before the End Date and must end on the day before the Rent is due. You will still be legally responsible for paying 
the Rent and for all other responsibilities under this Agreement until the notice ends and You have moved out of the 
Premises.

Section J3

Application of this Section J3

5 This Section J3 shall apply where the Resident is not an individual or individuals.
Permitted Occupier where the Resident is not an individual

6 On the basis that the Resident who is a party to this Agreement cannot personally occupy the Premises the parties 
agree and declare that:

6.1 the Permitted Occupier is the person or persons who is or are entitled to live in the Premises and who must be an 
employee of the Resident and (if applicable) that employee’s immediate family. The Permitted Occupier must occupy 
the Premises free of any rent rates or other charge of whatsoever nature as licensee for residential purposes only 
and by no other person. 

6.2 that the name and details of the Permitted Occupier of the Premises (and those of any immediate family, if applicable) 
will be notified by the Resident to the Landlord or Managing Agent (and has been so notified prior to the date of this 
Agreement) and whenever this may change during the Tenancy it is the Resident’s responsibility to inform the 
Landlord or Managing Agent of their full name, contact details and right to rent (pursuant to the Immigration Act 2014, 
as amended, replaced or re-enacted from time to time) within 5 Working Days of the change.

6.3 Each and every covenant, to be adhered to by the Resident under the terms of this Agreement except the requirement 
to pay Rent, also applies to the Permitted Occupier. For the avoidance of doubt, every requirement, save for the 
requirement to pay Rent, requiring the Resident to permit or allow or not permit or allow or to do or not do something 
which is referred to in this Agreement shall also apply to the Permitted Occupier and the Resident shall be liable for 
any breaches of covenant that arise by the Permitted Occupier's failure to comply with the terms of this Agreement.

6.4 Part E clause 25 shall be read as if the words ‘Your and Your Dependants’ were deleted and replaced with the words 
‘the Permitted Occupier’s’ 
Address for Service

7 The Resident hereby confirms that the address in England and Wales set out at in Part B clause 2 above is its address 
for service by the Landlord (including of notices and proceedings).`