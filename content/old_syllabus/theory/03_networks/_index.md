---
title: "[3] Networks"
weight: 30
# bookFlatSection: false #this makes it so this page isn't seen
# bookCollapseSection: true
---
 # Networks
 
---

 ## Review Tools

[Topic 3 Revision](https://www.computersciencecafe.com/topic-3-revision-ib.html) from Computer Science Cafe.

[Topic 3 Key Terminology](https://www.computersciencecafe.com/key-terminology-ib-topic-3.html) from Computer Science Cafe.

[Topic 3 Video](https://youtu.be/bFkYffPJq0M?si=m4CC7dIYQtygAfeg) from CS Classroom.

---

 ## Key Terminology

 {{< expand "Key Terminology" >}}

| Term                                                    | Meaning                                                                                                                                                                                                                                                  |
| ------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Local Area Network (LAN)                                | A LAN is a computer network that interconnects devices within a small geographic area, such as a single building or a campus.                                                                                                                            |
| Virtual Local Area Network (VLAN)                       | A VLAN is a network that logically separates devices into different broadcast domains, even though they are physically connected to the same network infrastructure.                                                                                     |
| Wide Area Network (WAN)                                 | A WAN is a computer network that covers a large geographic area, such as a city, state, or country.                                                                                                                                                      |
| Storage Area Network (SAN)                              | A SAN is a specialized high-speed network that provides block-level access to data storage.                                                                                                                                                              |
| Wireless Local Area Network (WLAN)                      | A WLAN is a LAN that uses wireless communication, such as Wi-Fi, to connect devices.                                                                                                                                                                     |
| Internet                                                | The Internet is a global network of computers connected through the Internet Protocol (IP).                                                                                                                                                              |
| Extranet                                                | An extranet is a private network that is partially accessible to authorised external parties, such as customers or partners.                                                                                                                             |
| Virtual Private Network (VPN)                           | A VPN is a private network that is created by using public communication infrastructure, such as the Internet.                                                                                                                                           |
| Personal Area Network (PAN)                             | A type of computer network that is used for personal or individual use, typically covering a small area such as a home, office or small group of offices.                                                                                                |
| Peer-to-Peer (P2P)                                      | A type of network architecture where each node is capable of acting as both a client and a server, allowing data to be shared directly between nodes without the need for a central server.                                                              |
| OSI Seven Layer Model                                   | The Open Systems Interconnection (OSI) Seven Layer Model is a theoretical model that describes how data is transmitted between networked devices. The seven layers are: Physical, Data Link, Network, Transport, Session, Presentation, and Application. |
| Physical Layer                                          | The lowest layer of the OSI model, responsible for transmitting and receiving raw bitstreams over a physical medium, such as copper wire, fiber optic cable, or wireless transmission.                                                                   |
| Data Link Layer                                         | The layer responsible for the reliable transfer of data between two adjacent nodes on a network. This layer is responsible for error detection and correction, and can also manage flow control.                                                         |
| Network Layer                                           | The layer responsible for routing data between different networks. This layer is responsible for addressing and routing data packets between networks, and can perform functions such as fragmentation and reassembly.                                   |
| Transport Layer                                         | The layer responsible for reliable end-to-end communication between applications running on different hosts. This layer provides services such as connection-oriented or connectionless data transmission, flow control, and error recovery.             |
| Session Layer                                           | The layer responsible for establishing, managing, and terminating communication sessions between applications. This layer manages the dialogue between applications, and can also provide services such as checkpointing and recovery.                   |
| Presentation Layer                                      | The layer responsible for representing data in a format that can be understood by applications. This layer can perform functions such as data encryption and decryption, compression and decompression, and data formatting.                             |
| Application Layer                                       | The highest layer of the OSI model, responsible for providing application services to users. This layer includes all the protocols and services that support applications, such as email, file transfer, and web browsing.                               |
| Protocol                                                | A set of rules and guidelines that govern the communication between devices on a network.                                                                                                                                                                |
| Data Packet                                             | A unit of data that is transmitted over a network. A packet typically contains a header with routing information and a payload with the actual data being transmitted.                                                                                   |
| Packet Switching                                        | A method of transmitting data in which packets are sent individually over a network and reassembled at the destination.                                                                                                                                  |
| Circuit Switching                                       | A method of transmitting data in which a dedicated circuit is established between the sender and receiver.                                                                                                                                               |
| Speed of Data Transmission                              | The rate at which data is transmitted over a network, typically measured in bits per second (bps).                                                                                                                                                       |
| Data Compression                                        | A technique used to reduce the size of data being transmitted over a network, allowing for more efficient use of network resources and faster transmission times.                                                                                        |
| Transmission Media                                      | The physical medium through which data is transmitted over a network. Examples include metal conductors (such as copper cables), fibre optic cables, wireless (such as Wi-Fi or WiMAX), and others.                                                      |
| Wireless Networks                                       | A type of network that uses wireless transmission media (such as Wi-Fi or WiMAX) to connect devices, allowing them to communicate without the need for physical cables.                                                                                  |
| Changes in Working Patterns                             | Refers to shifts in the way people work, such as increased telecommuting, remote work, and flexible work arrangements. These changes have been driven by advancements in technology and the availability of high-speed Internet connectivity.            |
| WiFi                                                    | A popular wireless networking standard that is used to connect devices such as computers, smartphones, and tablets to the Internet or to local networks.                                                                                                 |
| Worldwide Interoperability for Microwave Access (WiMAX) | A wireless networking standard that provides high-speed Internet connectivity over long distances.                                                                                                                                                       |
| Network Security                                        | The set of technologies, processes, and practices designed to protect a network and its associated devices from unauthorised access, use, disclosure, disruption, modification, or destruction.                                                          |
| Encryption Types                                        | Methods used to scramble data so that it can only be decrypted and read by authorised parties. Examples include symmetric encryption, asymmetric encryption, and hash functions.                                                                         |
| Data Integrity                                          | The accuracy, completeness, and consistency of data during transmission, storage, and retrieval.                                                                                                                                                         |
| Flow Control                                            | A technique used to regulate the flow of data between two devices or systems in order to prevent data loss or buffer overflow.                                                                                                                           |
| Deadlock                                                | A situation that occurs when two or more processes or devices are waiting for each other to release resources, resulting in a standstill or system failure.                                                                                              |
| Congestion                                              | A situation that occurs when a network or communication channel becomes overloaded with data traffic, resulting in slower data transmission or even data loss.                                                                                           |
| Error Checking                                          | A technique used to detect errors in data transmission, storage, and retrieval. This can involve various methods, such as parity checking, checksums, or cyclic redundancy checks (CRC).                                                                 |

{{< /expand >}}

---

## Example Problems

---
### Hardware

**Outline what is meant by a media access control (MAC) address. [2]**

{{< expand "Markscheme" >}}
*Award [2 max]*  
- A physical address/hardware identification number/12-digit hexadecimal number assigned by the manufacturer to a network interface in a device;  
- That helps to uniquely identify each device on a network;  
{{< /expand >}}

---

**Describe the purpose of the following hardware component of a network: Router. [2]**

{{< expand "Markscheme" >}}
*Award [2 max]*  
- A router is a hardware device that connects multiple networks together;  
- It directs data packets between networks based on their destination addresses;  
- The router examines each packet and determines the best path for it to reach its destination;  
- It uses protocols to decide how and where to forward packets;  
- Routers help manage network traffic and ensure data is sent efficiently;  
{{< /expand >}}

---

**Describe the purpose of the following hardware component of a network: Network interface card (NIC). [2]**

{{< expand "Markscheme" >}}
*Award [2 max]*  
- A network interface card (NIC) enables a computer or device to connect to a network;  
- It allows the device to communicate with other devices on the network by sending and receiving data packets;  
- The NIC provides the hardware interface between the computer and the network transmission media (such as Ethernet cables or wireless signals);  
- It determines how the device accesses the network and participates in network communication;  
{{< /expand >}}

---

**Identify one additional hardware component in a wireless LAN. [1]**

{{< expand "Markscheme" >}}

*Award [1 max]*  
- (Wireless) router;  
- Access points;  
- (Wireless) bridge or repeater;  
- (Wireless) controller;  
- Wireless adaptors / Network interface cards (NICs);  
{{< /expand >}}

---

### Types of Networks

**Identify two characteristics of a personal area network (PAN). [2]**

{{< expand "Markscheme" >}}
*Award [2 max]*  
- Smallest type of network;  
- Consists of connected devices in close proximity to the individual using them;  
- Connected via Bluetooth/wireless;  
- Suitable example: smartphone to car connection;  
{{< /expand >}}

---

**Identify two differences between a wide area network (WAN) and a local area network (LAN).**
[2]

{{< expand "Markscheme" >}}
*Award [2 max]*  
- WAN covers a much larger area (national/international), LANs usually cover a smaller area (such as a single site);
- Nodes connected to WANs often make use of connections through public networks (such as the telephone system), nodes connected to LANs are usually connected through private infrastructure;
- LANs are more secure than WANs (due to how WANs transmit the data /how far the data would need to travel);
- A higher bandwidth is available for transmission in a LAN than a WAN/ LANs can have a higher data transfer rate than a WAN;
- LAN is typically cheaper than WAN to implement/ maintain (as the equipment required for LAN is less expensive);
- WAN includes a large number of devices connected together, LAN includes less;
- WANs are typically slower than LANs due to the distance data must travel;
- WAN requires hardware to connect different networks, such as a router, LAN can be simple and does not need to connect to other networks;
{{< /expand >}}

---

**Outline two advantages of a school using a computer network. [4]**

{{< expand "Markscheme" >}}
*Award [4 max]. Mark as [2] and [2].*

- **File/resource sharing:**  
    - Files can be shared directly between computers on the network, eliminating the need for physical media like USB drives;  
    - All computers can share resources such as printers and scanners, improving efficiency;  
- **Communication:**  
    - Students and teachers can communicate easily with each other and with people around the world via the network;  
- **Interactive teamwork:**  
    - Collaborative software enables multiple users to work on documents or projects at the same time;  
- **Flexible access:**  
    - Students can access their files from any computer on the network, allowing them to start work on one device and finish on another;  
- **Software cost savings:**  
    - Network licenses for software are often cheaper than purchasing individual licenses for each computer;  
- **Simplified software management:**  
    - Installing or updating software on a central server saves time compared to managing each computer individually;  
- **Improved network security:**  
    - The school can monitor network activity and enforce security policies, helping to keep data secure;  
{{< /expand >}}
 
---


### Speed

---

**Explain why the speed of data transmission across a mobile network can vary. [3]**

{{< expand "Markscheme" >}}
*Award [3 max]*  
- The network technologies available in the area (3G, 4G, 5G);  
- Limited bandwidth;  
- Features of the  device;  
- Amount of data being transmitted;  
- Number of other users in the area using the same network;  
- Location of user with respect to cell towers (signal varies depending on coverage area);  
{{< /expand >}}

---
**Explain why the speed of data transmission on the wireless network in the training room may vary. [4]**

{{< expand "Markscheme" >}}
*Award [4 max]. Mark as [2] and [2].*

- The speed of data transmission on a wireless network can decrease as the distance between the receiver and the transmitter increases;  
- Physical obstructions such as solid walls can interfere with the wireless signal, slowing down transmission;  
- The available bandwidth on a wireless network is limited;  
- As more users connect to the network, the bandwidth is shared, which can reduce transmission speeds for each user;  

*Note to examiners: Answers must relate to wireless networks and not be a comparison between cabled and wireless networks.*
{{< /expand >}}

---

**Identify two factors that may affect the speed of data transmission. [2]**

{{< expand "Markscheme" >}}
*Award [2 max]*  
- Physical distance / the number of network devices which have to be crossed;  
- The performance of each of the devices (e.g., weak processor);  
- Quality / characteristics of network equipment (such as the router or transmission media / cable / fibre / wireless);  
- Number of network users (and their demand at any particular time);  
- Type of encryption used or the encryption strength / server bandwidth / size of the user data / type of protocol used;  
{{< /expand >}}

---


### Protocols

---
**Outline why protocols are necessary. [2]**

{{< expand "Markscheme" >}}
*Award [2 max]*  
- Protocols define the rules that govern network communication (for example, packet format, type and size, what happens when an error occurs, and which part of the network is supposed to handle the error and how);  
- Computer networks consist of various types of equipment (such as routers, switches, hubs, and network interface cards) from different vendors, but they must all work together or the network does not operate correctly;  
- Protocols work in layers (the highest being what the user sees, and the lowest being the wire that the information is transferred along) and these layers communicate with each other according to the rules (allowing communication to occur accurately and efficiently);  
{{< /expand >}}

---

**Outline one reason why protocols are used in communications between computers. [2]**

{{< expand "Markscheme" >}}
*Award [2 max]*  
- To provide a set of rules/procedures;  
- To enable two or more different electronic devices/computers/entities to understand each other during data transfer / enable successful communication;  
{{< /expand >}}

---

**Outline three reasons why protocols are necessary on a computer network. [6]**

{{< expand "Markscheme" >}}
*Award [6 max]*  
Award [1] for a reason, award [1] for an extension, x3.  
- Protocols define the rules for communication, ensuring devices can exchange data reliably and efficiently;  
    - For example, TCP/IP specifies how data is packaged, addressed, transmitted, and received;  
- Protocols provide security services such as encryption and authentication to protect data during transmission;  
    - For example, HTTPS and SSL secure web traffic;  
- Protocols include mechanisms for error checking, flow control, and congestion control to maintain data integrity and network performance;  
    - For example, error detection helps identify and correct transmission errors, while flow control prevents data loss;  
{{< /expand >}}

---

**Outline one reason for the use of standards in the construction of networks.**
{{< expand "Markscheme" >}}
*Award [2 max]*  
- Standards ensure compatibility between nodes on the network;
- Through the use of common techniques/protocols/language;
{{< /expand >}}

---

### OSI Model

---

**Identify two of the layers of the Open Systems Interconnection (OSI) seven-layer model. [2]**

{{< expand "Markscheme" >}}
*Award [2 max]*  
- Physical Layer;  
- Data Link Layer;  
- Network Layer;  
- Transport Layer;  
- Session Layer;  
- Presentation Layer;  
- Application Layer;  
{{< /expand >}}


---

### Security

---

**State one precaution a user can take to secure their data in case their laptop is stolen. [1]**

{{< expand "Markscheme" >}}
*Award [1 max]*  
- Assign a password or use biometric authentication on the device;  
- Avoid storing sensitive data on the laptop;  
- Safeguard all passwords and avoid saving login credentials or “remember me” cookies on the device;  
- Encrypt the SSD or hard drive;  
*Note: Reward other correct responses. Backing up data does not keep it secure, so no marks for “Regularly back up the SSD / hard drive to another location”.*
{{< /expand >}}

---

**Describe one method of security that may be used on this wireless network. [2]**

{{< expand "Markscheme" >}}
*Award [2 max]*  
- Encryption;  
    - Scrambles the contents of network transmissions so that intercepted data cannot be understood without the decryption key;  
- User ID (and password);  
    - Only allows authorized users to access the network;  
- Media Access Control (MAC) address filtering;  
    - Only devices with approved MAC addresses can connect to the network;  
- Firewall;  
    - Monitors and controls incoming and outgoing network traffic, blocking suspicious data;  
{{< /expand >}}

---

**Evaluate the use of trusted media access control (MAC) addresses as one method of network security. [4]**

{{< expand "Markscheme" >}}
*Award [4 max]*  
- Each network adapter has a unique MAC address assigned by the manufacturer;  
- Routers can use MAC addresses to identify and authenticate devices, allowing administrators to whitelist or blacklist specific devices for network access;  
- A disadvantage is that the whitelist must be updated whenever a new device needs access or when guests require temporary access, which can be inconvenient to manage;  
- This method is not effective against attackers who can intercept network traffic, discover valid MAC addresses, and spoof them to gain unauthorized access;  
{{< /expand >}}
 
---

**Describe the role of a firewall. [2]**

{{< expand "Markscheme" >}}
*Award [2 max]*  
- A firewall monitors incoming and outgoing network traffic;  
- Decides whether to allow or block specific traffic (based on a defined set of security rules) / restricts access to parts of a network / prevents unauthorised access of confidential data;  
- Accept software and hardware firewalls;  
    - Software firewall: program installed on each computer that monitors incoming and outgoing traffic / controls the behaviour of applications;  
    - Hardware firewall: equipment installed between the network and gateway that regulates traffic through ports and prohibits suspicious data packets;  
{{< /expand >}}

---



The staff at a doctor’s practice consist of a receptionist and a doctor.
The patients’ medical records and payments, the doctor’s appointment calendar, and other important data are stored in a database on the central computer.


**Outline one security measure that can be taken to prevent unauthorized access to the patients’ data stored on the central computer. [2]**

{{< expand "Markscheme" >}}
*Award [2 max]*  
- Passwords should be given to access certain aspects of the data;  
- There should be levels of hierarchy (e.g., receptionist only allowed to access names, addresses but not medical history/doctor’s notes);  
- Multi-factor authentication/one-factor authentication;  
    - Mandates users (doctor and receptionist) to verify their identities through various methods (e.g., PIN, thumb scanning, retina scanning);  
- Security awareness training for the doctor and receptionist / precautionary measures when handling patient data;  
- Encryption;  
    - Makes it harder for hackers to decipher confidential patient data;  
- Regularly installing updates/patches;  
    - To ensure the data is protected against new threats;  
{{< /expand >}}

---

### VPN

---

When the doctor visits a patient in their home, she needs to be able to access the patient’s medical records stored on the central computer in the practice.     
**Outline two reasons for the use of a virtual private network (VPN) in this situation. [4]**

{{< expand "Markscheme" >}}
*Award [4 max]*  
- Security when working remotely;  
    - VPN’s data encryption features allow the doctor to keep confidential information safe / VPN authenticates the user before giving access to data;  
- VPN allows access to any content in any place;  
    - Enables users to send and receive data across shared or public networks as if directly connected to the private network;  
- VPNs hide the location / hidden IP address;  
    - Makes it seem as if accessing data from another place / location of the patient unknown for hackers;  
- Protects the privacy of data;  
    - Prevents apps and websites from attributing the doctor’s behaviour to her computer’s IP address / limits collection of location and browser history from ISP;  
- VPNs usually have intuitive and user-friendly interface;  
    - Makes installation and use easy for the doctor (non-technical user);  
- VPN is adaptable to many smart devices;  
    - Doctor can use various devices / any available device;  
*Mark as [2] and [2].*  
{{< /expand >}}

---

**State two technologies that are required to provide a virtual private network (VPN). [2]**

{{< expand "Markscheme" >}}
*Award [2 max]*  
- (VPN) tunnelling (server);  
- (VPN aware) router (and firewall);  
- Encryption (protocol) (Accept examples IPSec / SSL / TSL);  
- VPN client software (installed on the employee’s computer);  
{{< /expand >}}

---

**Outline two features of a VPN that make it secure. [4]**

{{< expand "Markscheme" >}}
*Award [4 max]*  
- Authentication;  
    - Strong user VPN authentication uses various methods, including certificates, one-time passwords and software tokens;  
- Encryption;  
    - If data intercepted, it will not be readable;  
    - Encrypting each encapsulated data packet’s content with an encryption key (shared only between the VPN’s server and clients);  
- Tunnelling software;  
    - VPN hides a user’s data by encrypting it with a tunnel created between the user’s device and the VPN’s web server;  
- Multiple exit nodes;  
    - Makes it hard to distinguish where the data sent is originated (protecting privacy);  
*Mark as [2] and [2]. Award [1] for a feature and [1] for a reasonable expansion, x2.*  
{{< /expand >}}

---

**Explain one benefit to the staff of using a VPN to remotely access the school network.**

{{< expand "Markscheme" >}}
*Award [3 max]*  
- - Enhanced security of data;
- for example, using encryption;
- This prevents unauthorised access;

- Remote access to data and resources (from any location);
- Normal access of materials on the network;
- as though the user was using the network on site;
{{< /expand >}}

---

### Packets

---

**Describe the structure of a data packet. [2]**

{{< expand "Markscheme" >}}
*Award [2 max]*  
- The structure of a data packet typically includes a header, payload (actual data), and sometimes a trailer;  
- The header contains control information such as origin and destination IP addresses, packet number, and other metadata;  
- The payload is the actual data being transmitted;  
- The trailer (if present) may include error checking or control information to signal the end of the packet;  
{{< /expand >}}

---

**State three pieces of information that a data packet must contain. [3]**

{{< expand "Markscheme" >}}
*Award [3 max]*  
- Data;  
- Protocol;  
- Packet number;  
- Total number of packets;  
- Sender’s IP address;  
- Receiver’s IP address;  
- Control bits / Parity bit / Check digit / Time to live (hop limit);  
{{< /expand >}}

---

### Packet Switching

**Explain how data is transmitted by packet switching. [3]**

{{< expand "Markscheme" >}}
*Award [3 max]*  
- A message / the data is broken into a number of parts;  
- Which are sent independently;  
- Over the optimum route for each packet;  
- The individual parts are reassembled at the destination;  
- Each packet contains the (IP) address of both the sender and recipient;  
{{< /expand >}}

---

**Explain how data is transmitted by packet switching. [4]**

{{< expand "Markscheme" >}}
*Award [4 max]*  
- Data is organized in specially formatted units (data packets);  
- Each data packet contains: data, address of the sender, address of the receiver, size of packet, sequence number, control codes, etc.;  
- Routed from source to destination using network switches and routers;  
- Switches and routers determine how best to transfer the packet between intermediate devices on the path to its destination;  
- Data packets are reassembled at destination;  
{{< /expand >}}

---

**Explain how data is transmitted using packet switching. [5]**

{{< expand "Markscheme" >}}
*Award [5 max]*  
- The whole data is split into (fixed / equal) sized chunks / packets;  
- Each packet has a header, payload and trailer;  
- Packet contains information such as source, destination IP addresses, packet number, protocol, checksum, payload / data, CRC etc (at least two);  
- Each packet is sent individually / independently along the best path (by a router);  
- Packets may take different routes to the destination;  
- If a route becomes unavailable, individual packets can be re-routed;  
- Packets (may) arrive at the destination out of order;  
- Packets are re-ordered / joined together at the destination;  
- Missing packets can be re-sent;  
{{< /expand >}}

---

### Compression


**Outline the reason for compression when transmitting data. [2]**

{{< expand "Markscheme" >}}
*Award [2 max]*  
- The reason for compression when transmitting data is to save on transfer times;  
    - As it reduces the number of bits needed to represent data (when compared with the original data);  
- Compressing data involves modifying/restructuring files, so that they take up less space;  
    - And this results in cost savings in cloud storage;  
- To take up less bandwidth;  
    - Because data compression reduces the size of files to be transmitted over a network;  

*Note to examiners: Award [1] for a reason (for example, to save data usage for sending files over the internet, to save storage capacity, to speed up file transfer, to decrease costs for network bandwidth, etc.), and award [1] for an expansion.*
{{< /expand >}}

---

**Explain why data compression would be used when data is transmitted. [3]**

{{< expand "Markscheme" >}}
*Award [3 max]*  
- Compression reduces the size of a file / size of data / the number of packets to be transmitted;  
- This reduces transmission time / consumes less bandwidth;  
- Can result in significant cost savings;  
{{< /expand >}}

---

### Encryption


**Define the term data encryption. [1]**

{{< expand "Markscheme" >}}
*Award [1 max]*  
- Data encryption refers to calculations/algorithms that transform plain text into a form that is non-readable to unauthorized parties (authorized recipient of an encrypted text uses a key and the algorithm to decrypt the data/ to transform it to the original plain text version);
{{< /expand >}}

---

**Outline how encryption is used to protect data. [2]**

{{< expand "Markscheme" >}}
*Award [2 max]*  
- Encryption scrambles readable text;  
    - So, it can only be read/understood by the person who has the decryption key;  
- Data encryption translates plain text into ciphertext;  
    - That can be viewed/read in its original form only if it is decrypted with the correct key;  
{{< /expand >}}

---


**Describe how encryption is used to protect data during transmission.**
{{< expand "Markscheme" >}}
*Award [3 max]* 
- Plain text is changed to cypher text / Data is scrambled using an encryption algorithm / key / A Key is required by sender and receiver for authentication;
- Cypher text / data cannot be understood if intercepted;
- The cypher text/data is then decrypted using a (decryption) key when received by the receiver;
{{< /expand >}}


---

### Transmission Medium

**Identify two characteristics of fibre optic cables as a transmission medium.**
{{< expand "Markscheme" >}}
*Award [2 max]* 

- Allows very fast transmission of data / Extremely high bandwidth possible;
(Made of glass / plastic fibre) that can transfer information via pulses of light;
- Immune to electromagnetic interference / temperature changes / severe weather / highly resistant to noise and moisture;
- Very high security rating;
- Safe to use in high-voltage locations, areas where flammable gases / chemicals;
-Very long distance of transmission before requiring repeaters / attenuation;
- They have a long lifespan (thinner and light weighted, so more flexible than other media);
- Expensive / harder to install;
{{< /expand >}}

---

**Identify two characteristics of wireless transmission.**

{{< expand "Markscheme" >}}
*Award [2 max]*  
- Uses radio waves / electromagnetic waves to transfer data;  
- Transmission speed of data is limited;  
- Range of transmission / transmission reliability can be affected by distance from access point / number of other users / obstacles etc;  
- Inexpensive to install / no need to spend on cabling;  
- Relatively easy to expand / add new devices / scale down to accommodate changes in demand;  
- Security can be poor (unless encryption is applied) / subject to eavesdropping / interception;  
- Allows users to move around without losing access to the network;  
{{< /expand >}}

---

**Identify two reasons why fibre optic cable would be preferred over wireless connectivity.**

{{< expand "Markscheme" >}}
*Award [2 max]* 
- Fibre optics allow faster transmission speeds;
- Fibre optic cables are more secure/harder to break into;
- Fibre optic cable transmission is more reliable/less likely to suffer interference;
- Fibre optics allow transmission over longer distance;
- Fibre optics allow greater bandwidth;
{{< /expand >}}

---

### Wireless Networks

---

**Distinguish between a wired network and a wireless network in terms of reliability of transmission. [4]**

{{< expand "Markscheme" >}}
*Award [4 max]*  
- The reliability of wireless depends on the strength of the wireless signal;  
    - Depends on distance from router;  
    - Depends on the topology/shape of the surroundings;  
    - A wireless LAN has slower data transfer;  
- Ethernet is more reliable as the strength of the signal does not depend on the distance from the router / wired LAN supports longer distances;  
- Wired is immune to interference;  
- There is no issue with the topology/shape of the surrounding;  
- But the Ethernet cable may be cut/broken affecting reliability;  
{{< /expand >}}

---

**Outline why a wireless network may be less secure than a wired network. [2]**

{{< expand "Markscheme" >}}
*Award [2 max]*  
- Wired network is only accessible with a physical cable connection;  
- In wireless networks, signals are broadcasted outside of the building, leaving it open to the public and potential hackers / easy to intercept transmissions;  
- A wireless network is more open to misuse;  
- Network administrator cannot directly monitor a specific machine;  
{{< /expand >}}



---

**Identify two characteristics of wireless transmission. [2]**

{{< expand "Markscheme" >}}
*Award [2 max]*  
- Uses radio waves / electromagnetic waves to transfer data;  
- Transmission speed of data is limited;  
- Range of transmission / transmission reliability can be affected by distance from access point / number of other users / obstacles etc;  
- Inexpensive to install / no need to spend on cabling;  
- Relatively easy to expand / add new devices / scale down to accommodate changes in demand;  
- Security can be poor (unless encryption is applied) / subject to eavesdropping / interception;  
- Allows users to move around without losing access to the network;  
{{< /expand >}}



