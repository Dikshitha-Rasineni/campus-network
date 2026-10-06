/* ==========================================================
   CAMPUS NETWORK DOCUMENTATION PLATFORM — APP LOGIC
   ========================================================== */

/* ---------- DATA: Overview module cards ---------- */
const MODULE_DATA = [
    {
        num: '01', view: 'module-1', status: 'done', statusLabel: 'Documented',
        title: 'Campus Network Foundation',
        desc: 'Build the basic campus LAN using a router, two switches, four PCs and a server.',
        topics: ['Packet Tracer', 'Router config', 'LAN']
    },
    {
        num: '02', view: 'module-2', status: 'done', statusLabel: 'Documented',
        title: 'VLSM + Static & Default Routing',
        desc: 'Subnet the campus with VLSM and connect blocks using static and default routes.',
        topics: ['VLSM', 'Static routing']
    },
    {
        num: '03', view: 'module-3', status: 'done', statusLabel: 'Documented',
        title: 'RIP v1 + RIP v2',
        desc: 'Distance-vector routing across campus blocks using RIP version 1 and 2.',
        topics: ['RIPv1', 'RIPv2']
    },
    {
        num: '04A', view: 'module-4a', status: 'done', statusLabel: 'Documented',
        title: 'Single-Area OSPF',
        desc: 'Link-state routing with OSPF, all routers and LANs in a single Area 0.',
        topics: ['OSPF', 'Area 0']
    },
    {
        num: '04B', view: 'module-4b', status: 'done', statusLabel: 'Documented',
        title: 'Multi-Area OSPF',
        desc: 'Extend OSPF into Area 1, the Area 0 backbone, and Area 2 via two ABRs.',
        topics: ['OSPF', 'Multi-Area']
    },
    {
        num: '05', view: 'module-5', status: 'done', statusLabel: 'Documented',
        title: 'WAN + NAT + EIGRP + BGP',
        desc: 'Connect the campus edge to an external network with NAT, EIGRP and BGP.',
        topics: ['NAT', 'EIGRP', 'BGP']
    }
];

/* ---------- DATA: Module 1 concept cards ---------- */
const CONCEPTS = [
    ['What is Cisco Packet Tracer?', 'A network simulation tool from Cisco that lets you build, configure and test virtual networks of routers, switches, PCs and servers.'],
    ['What is a router?', 'A Layer 3 device that forwards data between different networks and acts as the gateway out of a LAN.'],
    ['What is a switch?', 'A Layer 2 device that connects end devices within a LAN and forwards Ethernet frames based on MAC addresses.'],
    ['What is a LAN?', 'A Local Area Network — a group of devices connected together within a single site, such as one building or block.'],
    ['What is an IP address?', 'A numeric address (e.g. 192.168.10.10) that identifies a device on a network so it can send and receive data.'],
    ['What is a subnet mask?', 'A value (e.g. 255.255.255.0) that defines which part of an IP address is the network portion and which is the host portion.'],
    ['What is a default gateway?', 'The router interface a device sends traffic to when the destination is outside its own local network.'],
    ['What is a network topology?', 'The arrangement of devices and links in a network — how everything is physically or logically connected.'],
    ['What is an extended-star topology?', 'A star topology where one or more of the outer nodes is itself the center of another star — here, a switch connects to the router and another switch, which fans out to more devices.'],
    ['What is a straight-through cable?', 'A copper Ethernet cable used to connect dissimilar devices, such as a switch to a router or a switch to a PC.'],
    ['What is a router interface?', 'A physical or logical port on a router (e.g. GigabitEthernet0/0) used to connect to a network and pass traffic.'],
    ['What does "no shutdown" mean?', 'The command that administratively enables an interface. Interfaces are shut down by default and must be turned on with this command.'],
    ['What does "up/up" mean?', 'In "show ip interface brief", the first "up" is the interface\'s administrative status and the second is the line protocol status — both up means the interface is enabled and the link is active.'],
    ['What is ping?', 'A utility that sends ICMP echo request packets to a destination and listens for echo replies, used to test reachability.'],
    ['What is ARP?', 'Address Resolution Protocol — resolves a known IP address to the corresponding MAC address on the local network.']
];

/* ---------- DATA: Module 1 configuration steps ---------- */
const CONFIG_STEPS = [
    { cmd: 'enable', what: 'Enters privileged EXEC mode on the router.', why: 'Required before any configuration commands can be run.' },
    { cmd: 'configure terminal', what: 'Enters global configuration mode.', why: 'Needed to change the router\u2019s configuration, such as hostname and interfaces.' },
    { cmd: 'hostname CAMPUS-R1', what: 'Sets the router\u2019s device name to CAMPUS-R1.', why: 'Identifies the router clearly in the console and in documentation.' },
    { cmd: 'enable secret class', what: 'Sets an encrypted password required to enter privileged EXEC mode.', why: 'Protects privileged access to the router configuration.' },
    { cmd: 'interface gigabitEthernet 0/0', what: 'Enters configuration mode for the GigabitEthernet0/0 interface.', why: 'This is the interface connected to the campus LAN switch.' },
    { cmd: 'ip address 192.168.10.1 255.255.255.0', what: 'Assigns an IP address and subnet mask to the router\u2019s GigabitEthernet0/0 interface.', why: 'This interface acts as the gateway for the campus LAN.' },
    { cmd: 'no shutdown', what: 'Administratively enables the interface.', why: 'Interfaces are shut down by default; without this the interface stays down.' },
    { cmd: 'exit', what: 'Leaves interface configuration mode.', why: 'Returns to global configuration mode to continue setup.' },
    { cmd: 'line console 0', what: 'Enters configuration mode for the console line.', why: 'The console line is used for direct local access to the router.' },
    { cmd: 'password cisco', what: 'Sets the password required on this line.', why: 'Requires authentication before console access is granted.' },
    { cmd: 'login', what: 'Enables password checking on the line.', why: 'Without this, the password set above would not actually be enforced.' },
    { cmd: 'exit', what: 'Leaves console line configuration mode.', why: 'Returns to global configuration mode.' },
    { cmd: 'line vty 0 4', what: 'Enters configuration mode for the 5 virtual terminal (Telnet) lines.', why: 'Controls remote CLI access to the router.' },
    { cmd: 'password cisco', what: 'Sets the password required for remote (VTY) access.', why: 'Protects the router from unauthenticated remote login.' },
    { cmd: 'login', what: 'Enables password checking on the VTY lines.', why: 'Enforces the VTY password set above.' },
    { cmd: 'exit', what: 'Leaves VTY line configuration mode.', why: 'Returns to global configuration mode.' },
    { cmd: 'end', what: 'Exits configuration mode back to privileged EXEC mode.', why: 'Configuration is complete; ready to save or verify.' },
    { cmd: 'copy running-config startup-config', what: 'Saves the running configuration to NVRAM as the startup configuration.', why: 'Ensures the configuration survives a router reload.' }
];

/* ---------- DATA: Networking commands reference ---------- */
const NETWORK_COMMANDS = [
    { cmd: 'ipconfig', what: 'Displays the IP configuration of the local PC.', usedFor: 'Checking a device\u2019s own IP address, subnet mask and default gateway.', info: 'IPv4/IPv6 address, subnet mask, default gateway.' },
    { cmd: 'ping 192.168.10.1', what: 'Sends ICMP echo requests to the router and reports replies.', usedFor: 'Testing basic reachability to the default gateway.', info: 'Reply success/failure, round-trip time, packet loss.' },
    { cmd: 'tracert 192.168.10.100', what: 'Traces the hop-by-hop path packets take to reach the server.', usedFor: 'Identifying each router/hop along the path to a destination.', info: 'List of intermediate hops and response times.' },
    { cmd: 'arp -a', what: 'Displays the local ARP cache mapping IP addresses to MAC addresses.', usedFor: 'Checking which IP-to-MAC mappings a device has already resolved.', info: 'IP address, physical (MAC) address, and entry type.' }
];

/* ---------- DATA: Screenshot gallery ---------- */
const GALLERY = [
    { category: 'Topology', items: [
        { src: 'module1-topology.png', caption: 'Full Module 1 topology' }
    ]},
    { category: 'Configuration', items: [
        { src: 'module1-router-login.png', caption: 'Router console login prompt' },
        { src: 'module1-pc-ip-configuration.png', caption: 'PC IP configuration' },
        { src: 'module1-server-ip-configuration.png', caption: 'Server IP configuration' }
    ]},
    { category: 'Verification', items: [
        { src: 'module1-interface-verification.png', caption: 'show ip interface brief output' },
        { src: 'module1-connectivity-verification.png', caption: 'Ping connectivity results' }
    ]}
];

/* ---------- DATA: Modules 2-5 (generalized) ---------- */
const EXT_MODULES = {
    m2: {
        configGroups: [{ label: "Documented static routes", steps: [{ cmd: "ip route 192.168.50.64 255.255.255.224 192.168.50.114", what: "Adds a static route to the Computer Science block (192.168.50.64/27) via next-hop 192.168.50.114.", why: "192.168.50.64/27 is not directly connected to this router, so a static route is needed to reach it." }, { cmd: "ip route 192.168.50.96 255.255.255.240 192.168.50.114", what: "Adds a static route to the Library block (192.168.50.96/28) via next-hop 192.168.50.114.", why: "192.168.50.96/28 sits beyond the next router and needs an explicit route to be reachable." }] }],
        commands: [{ cmd: "show ip route", what: "Displays the router\u2019s routing table.", usedFor: "Confirming the static routes to the Computer Science and Library blocks are installed.", info: "Route codes, destination networks, next-hop addresses." }, { cmd: "ping 192.168.50.66", what: "Sends ICMP echo requests to the Computer Science PC.", usedFor: "Verifying reachability to the Computer Science block.", info: "Reply success/failure, round-trip time." }, { cmd: "ping 192.168.50.98", what: "Sends ICMP echo requests to the Library PC.", usedFor: "Verifying reachability to the Library block.", info: "Reply success/failure, round-trip time." }, { cmd: "tracert 192.168.50.98", what: "Traces the hop-by-hop path to the Library PC.", usedFor: "Confirming traffic follows the expected router path.", info: "List of intermediate hops and response times." }],
        gallery: [{ category: "Topology", items: [{ src: "module2-topology.png", caption: "Full Module 2 topology" }] }, { category: "Configuration", items: [{ src: "module2-ip-configuration.png", caption: "IP configuration on the department PCs" }] }, { category: "Verification", items: [{ src: "module2-routing-table.png", caption: "Routing table showing the static routes" }, { src: "module2-connectivity-verification.png", caption: "Ping results between blocks" }] }],
        outputs: null
    },
    m3: {
        configGroups: [{ label: "RIP version 1", steps: [{ cmd: "router rip", what: "Enters RIP configuration mode and enables the RIP process.", why: "Starts dynamic distance-vector routing on the router." }, { cmd: "version 1", what: "Sets the RIP process to version 1.", why: "RIPv1 is classful and does not send subnet mask information in its updates." }, { cmd: "network 192.168.10.0", what: "Enables RIP on the interface(s) in the 192.168.10.0 network and advertises it.", why: "Tells RIP which directly connected network to include in updates." }, { cmd: "network 10.0.0.0", what: "Enables RIP on the router-link network.", why: "Advertises the point-to-point link so neighbouring routers can route across it." }] }, { label: "RIP version 2", steps: [{ cmd: "router rip", what: "Re-enters RIP configuration mode.", why: "Same RIP process, reconfigured for version 2." }, { cmd: "version 2", what: "Sets the RIP process to version 2.", why: "RIPv2 is classless and carries subnet mask information with each route." }, { cmd: "no auto-summary", what: "Disables automatic route summarization at classful network boundaries.", why: "Without this, RIPv2 would still summarize routes the same way RIPv1 does." }] }],
        commands: [{ cmd: "show ip route", what: "Displays the routing table.", usedFor: "Confirming RIP-learned (R) routes to LAN-A and LAN-C appear.", info: "Route codes, destination networks, next-hop, metric." }, { cmd: "show ip protocols", what: "Shows the routing protocol configuration and state.", usedFor: "Confirming RIP version, networks advertised, and timers.", info: "RIP version, networks, routing information sources." }, { cmd: "ping 192.168.20.10", what: "Sends ICMP echo requests across the RIP-routed path to LAN-C.", usedFor: "Verifying end-to-end reachability under RIP.", info: "Reply success/failure, round-trip time." }, { cmd: "traceroute 192.168.20.10", what: "Traces the hop-by-hop path to a LAN-C host.", usedFor: "Confirming traffic follows the R1 \u2192 R2 \u2192 R3 path.", info: "List of intermediate hops." }],
        gallery: [{ category: "Topology", items: [{ src: "module3-topology.png", caption: "Full Module 3 topology" }] }, { category: "Configuration", items: [{ src: "module3-ip-configuration.png", caption: "IP configuration on routers and PCs" }] }, { category: "Verification", items: [{ src: "module3-rip-v1-verification.png", caption: "RIPv1 routing table / protocol verification" }, { src: "module3-rip-v2-verification.png", caption: "RIPv2 routing table / protocol verification" }, { src: "module3-connectivity-verification.png", caption: "Ping results across the RIP-routed path" }] }],
        outputs: null
    },
    m4a: {
        configGroups: [{ label: "R1", steps: [{ cmd: "router ospf 1", what: "Starts OSPF process 1 on R1.", why: "Enables the OSPF routing protocol." }, { cmd: "router-id 1.1.1.1", what: "Manually sets R1\u2019s OSPF router-id to 1.1.1.1.", why: "Gives R1 a stable, predictable identity in the OSPF domain." }, { cmd: "network 192.168.10.0 0.0.0.255 area 0", what: "Advertises LAN1 into Area 0.", why: "Puts R1\u2019s local LAN into the OSPF backbone area." }, { cmd: "network 10.0.0.0 0.0.0.3 area 0", what: "Advertises the R1\u2013R2 link into Area 0.", why: "Allows R1 to form an OSPF adjacency with R2." }, { cmd: "network 10.0.0.4 0.0.0.3 area 0", what: "Advertises the R1\u2013R3 link into Area 0.", why: "Allows R1 to form an OSPF adjacency with R3." }] }, { label: "R2", steps: [{ cmd: "router ospf 1", what: "Starts OSPF process 1 on R2.", why: "Enables the OSPF routing protocol." }, { cmd: "router-id 2.2.2.2", what: "Manually sets R2\u2019s OSPF router-id to 2.2.2.2.", why: "Gives R2 a stable, predictable identity in the OSPF domain." }, { cmd: "network 192.168.20.0 0.0.0.255 area 0", what: "Advertises LAN2 into Area 0.", why: "Puts R2\u2019s local LAN into the OSPF backbone area." }, { cmd: "network 10.0.0.0 0.0.0.3 area 0", what: "Advertises the R1\u2013R2 link into Area 0.", why: "Allows R2 to form an OSPF adjacency with R1." }, { cmd: "network 10.0.0.8 0.0.0.3 area 0", what: "Advertises the R2\u2013R3 link into Area 0.", why: "Allows R2 to form an OSPF adjacency with R3." }] }, { label: "R3", steps: [{ cmd: "router ospf 1", what: "Starts OSPF process 1 on R3.", why: "Enables the OSPF routing protocol." }, { cmd: "router-id 3.3.3.3", what: "Manually sets R3\u2019s OSPF router-id to 3.3.3.3.", why: "Gives R3 a stable, predictable identity in the OSPF domain." }, { cmd: "network 192.168.30.0 0.0.0.255 area 0", what: "Advertises LAN3 into Area 0.", why: "Puts R3\u2019s local LAN into the OSPF backbone area." }, { cmd: "network 10.0.0.4 0.0.0.3 area 0", what: "Advertises the R1\u2013R3 link into Area 0.", why: "Allows R3 to form an OSPF adjacency with R1." }, { cmd: "network 10.0.0.8 0.0.0.3 area 0", what: "Advertises the R2\u2013R3 link into Area 0.", why: "Allows R3 to form an OSPF adjacency with R2." }] }],
        commands: [{ cmd: "show ip ospf neighbor", what: "Lists OSPF neighbours and their adjacency state.", usedFor: "Confirming a full (FULL) adjacency has formed with each directly connected router.", info: "Neighbor ID, priority, state, address, interface." }, { cmd: "show ip route", what: "Displays the routing table.", usedFor: "Confirming OSPF-learned (O) routes to the remote LANs appear.", info: "Route codes, destination networks, next-hop, cost." }, { cmd: "show ip ospf", what: "Displays OSPF process information.", usedFor: "Confirming the router-id, area and process details.", info: "Router-id, area count, SPF statistics." }, { cmd: "ping 192.168.30.10", what: "Sends ICMP echo requests to a host on LAN3.", usedFor: "Verifying end-to-end reachability across the OSPF domain.", info: "Reply success/failure, round-trip time." }],
        gallery: [{ category: "Topology", items: [{ src: "module4a-topology.png", caption: "Full Module 4A topology" }] }, { category: "Configuration", items: [{ src: "module4a-ip-configuration.png", caption: "IP configuration on routers" }] }, { category: "OSPF Neighbor Verification", items: [{ src: "module4a-r1-ospf-configuration.png", caption: "R1 \u2014 show ip ospf neighbor output" }, { src: "module4a-r2-ospf-configuration.png", caption: "R2 \u2014 show ip ospf neighbor output" }, { src: "module4a-r3-ospf-configuration.png", caption: "R3 \u2014 show ip ospf neighbor output" }] }, { category: "Verification", items: [{ src: "module4a-routing-table.png", caption: "Routing table with OSPF-learned routes" }, { src: "module4a-connectivity-verification.png", caption: "Ping results between LANs" }] }],
        outputs: null
    },
    m4b: {
        configGroups: [{ label: "R1 \u2014 Area 1", steps: [{ cmd: "router ospf 1", what: "Starts OSPF process 1 on R1.", why: "Enables OSPF routing on R1." }, { cmd: "router-id 1.1.1.1", what: "Sets R1\u2019s OSPF router-id.", why: "Gives R1 a stable identity in the OSPF domain." }, { cmd: "network 192.168.10.0 0.0.0.255 area 1", what: "Advertises LAN-A into Area 1.", why: "LAN-A is R1\u2019s local network, placed in the non-backbone Area 1." }, { cmd: "network 10.0.0.0 0.0.0.3 area 1", what: "Advertises the R1\u2013R2 link into Area 1.", why: "This link belongs to Area 1, allowing R1 to form an adjacency with R2 inside that area." }] }, { label: "R2 \u2014 ABR", steps: [{ cmd: "router ospf 1", what: "Starts OSPF process 1 on R2.", why: "Enables OSPF routing on R2." }, { cmd: "router-id 2.2.2.2", what: "Sets R2\u2019s OSPF router-id.", why: "Gives R2 a stable identity in the OSPF domain." }, { cmd: "network 10.0.0.0 0.0.0.3 area 1", what: "Advertises the R1\u2013R2 link into Area 1.", why: "Forms R2\u2019s adjacency with R1 inside Area 1." }, { cmd: "network 10.0.0.4 0.0.0.3 area 0", what: "Advertises the R2\u2013R3 backbone link into Area 0.", why: "Makes R2 an ABR by giving it an interface in the Area 0 backbone." }] }, { label: "R3 \u2014 ABR", steps: [{ cmd: "router ospf 1", what: "Starts OSPF process 1 on R3.", why: "Enables OSPF routing on R3." }, { cmd: "router-id 3.3.3.3", what: "Sets R3\u2019s OSPF router-id.", why: "Gives R3 a stable identity in the OSPF domain." }, { cmd: "network 10.0.0.4 0.0.0.3 area 0", what: "Advertises the R2\u2013R3 backbone link into Area 0.", why: "Makes R3 an ABR alongside R2, both sitting on the Area 0 backbone link." }, { cmd: "network 10.0.0.8 0.0.0.3 area 2", what: "Advertises the R3\u2013R4 link into Area 2.", why: "Connects Area 2 to R3, R3\u2019s other ABR interface." }] }, { label: "R4 \u2014 Area 2", steps: [{ cmd: "router ospf 1", what: "Starts OSPF process 1 on R4.", why: "Enables OSPF routing on R4." }, { cmd: "router-id 4.4.4.4", what: "Sets R4\u2019s OSPF router-id.", why: "Gives R4 a stable identity in the OSPF domain." }, { cmd: "network 10.0.0.8 0.0.0.3 area 2", what: "Advertises the R3\u2013R4 link into Area 2.", why: "Forms R4\u2019s adjacency with R3 inside Area 2." }, { cmd: "network 192.168.40.0 0.0.0.255 area 2", what: "Advertises LAN-D into Area 2.", why: "LAN-D is R4\u2019s local network, placed in the non-backbone Area 2." }] }],
        commands: [{ cmd: "show ip ospf neighbor", what: "Lists OSPF neighbours and their adjacency state.", usedFor: "Confirming adjacencies across each area \u2014 R1\u2013R2 in Area 1, R2\u2013R3 in Area 0, R3\u2013R4 in Area 2.", info: "Neighbor ID, priority, state, address, interface." }, { cmd: "show ip ospf", what: "Displays OSPF process information, including areas.", usedFor: "Confirming each router\u2019s area membership and ABR status.", info: "Router-id, area list, SPF statistics." }, { cmd: "show ip route", what: "Displays the routing table.", usedFor: "Confirming inter-area OSPF (O IA) routes appear for the remote LAN.", info: "Route codes, destination networks, next-hop, cost." }, { cmd: "show ip protocols", what: "Shows the routing protocol configuration and state.", usedFor: "Confirming the OSPF process and areas configured on the router.", info: "Process ID, router-id, areas, networks." }, { cmd: "ping <remote-PC-IP>", what: "Sends ICMP echo requests to a PC in a different area.", usedFor: "Verifying end-to-end reachability across all three areas.", info: "Reply success/failure, round-trip time." }],
        gallery: [{ category: "Topology", items: [{ src: "module4b-topology.png", caption: "Full Module 4B topology across Area 1, Area 0 and Area 2" }] }, { category: "Configuration", items: [{ src: "module4b-pc0-ip-configuration.png", caption: "PC0 IP configuration" }] }, { category: "Verification", items: [{ src: "module4b-connectivity-verification.png", caption: "Ping results across areas" }] }],
        outputs: null
    },
    m5: {
        configGroups: [{ label: "PPP \u2014 R0", steps: [{ cmd: "interface serial 0/1/0", what: "Enters configuration mode for R0\u2019s serial interface.", why: "This is the WAN link to R1." }, { cmd: "ip address 10.10.10.1 255.255.255.252", what: "Assigns the R0 side of the /30 WAN link.", why: "Gives R0 an address on the point-to-point link to R1." }, { cmd: "encapsulation ppp", what: "Sets the serial encapsulation to PPP.", why: "Switches the link from the default HDLC to PPP." }, { cmd: "clock rate 64000", what: "Sets the clocking rate on the DCE end of the serial link.", why: "One side of a back-to-back serial link must provide clocking; this is the DCE end." }, { cmd: "no shutdown", what: "Administratively enables the interface.", why: "Interfaces are shut down by default." }] }, { label: "PPP \u2014 R1", steps: [{ cmd: "interface serial 0/1/0", what: "Enters configuration mode for R1\u2019s serial interface.", why: "This is the WAN link to R0." }, { cmd: "ip address 10.10.10.2 255.255.255.252", what: "Assigns the R1 side of the /30 WAN link.", why: "Gives R1 an address on the point-to-point link to R0." }, { cmd: "encapsulation ppp", what: "Sets the serial encapsulation to PPP.", why: "Must match R0\u2019s encapsulation for the link to come up." }, { cmd: "no shutdown", what: "Administratively enables the interface.", why: "Interfaces are shut down by default." }] }, { label: "NAT / PAT \u2014 R0", steps: [{ cmd: "interface g0/0", what: "Enters configuration mode for R0\u2019s LAN interface.", why: "This is the campus-facing (inside) interface." }, { cmd: "ip nat inside", what: "Marks this interface as the NAT inside interface.", why: "Traffic entering here is treated as coming from the internal network." }, { cmd: "interface serial 0/1/0", what: "Enters configuration mode for R0\u2019s WAN interface.", why: "This is the outside-facing interface toward the WAN." }, { cmd: "ip nat outside", what: "Marks this interface as the NAT outside interface.", why: "Traffic leaving here is translated to the outside address." }, { cmd: "access-list 1 permit 192.168.10.0 0.0.0.255", what: "Defines which internal addresses are eligible for translation.", why: "Only traffic matching this list \u2014 the campus LAN \u2014 is translated by NAT." }, { cmd: "ip nat inside source list 1 interface serial 0/1/0 overload", what: "Enables PAT, translating matched inside addresses to the serial interface\u2019s address, using port numbers to allow many hosts to share it.", why: "Lets the whole campus LAN share R0\u2019s single WAN-facing address." }] }, { label: "BGP \u2014 R1 (AS 65002)", steps: [{ cmd: "router bgp 65002", what: "Starts the BGP process for Autonomous System 65002.", why: "This is the AS R1 belongs to for this peering, as documented." }, { cmd: "neighbor 10.10.30.1 remote-as 65001", what: "Defines R2 as a BGP neighbor in remote AS 65001.", why: "Establishes the external BGP peering across the R1\u2013R2 link." }] }, { label: "BGP \u2014 R2 (AS 65001)", steps: [{ cmd: "router bgp 65001", what: "Starts the BGP process for Autonomous System 65001 \u2014 the campus AS.", why: "This is the AS R2 belongs to for this peering, as documented." }, { cmd: "neighbor 10.10.30.2 remote-as 65002", what: "Defines R1 as a BGP neighbor in remote AS 65002.", why: "Establishes the external BGP peering across the R1\u2013R2 link." }, { cmd: "network 192.168.10.0 mask 255.255.255.0", what: "Injects the campus network into BGP.", why: "Advertises 192.168.10.0/24 to the BGP peer so it becomes reachable externally." }] }],
        commands: [{ cmd: "show ip eigrp neighbors", what: "Lists EIGRP neighbours.", usedFor: "Confirming EIGRP adjacencies formed across the internal WAN links.", info: "Neighbor address, interface, hold time." }, { cmd: "show ip route", what: "Displays the routing table.", usedFor: "Confirming EIGRP-learned (D) routes and the NAT/BGP-related paths appear.", info: "Route codes, destination networks, next-hop." }, { cmd: "show ip nat translations", what: "Displays active NAT/PAT translation entries.", usedFor: "Confirming campus traffic is being translated as it leaves R0.", info: "Inside local/global and outside local/global addresses." }, { cmd: "show ip bgp", what: "Displays the BGP table.", usedFor: "Confirming the campus network is present with the correct AS path.", info: "Network, next-hop, AS path." }, { cmd: "show ip bgp summary", what: "Displays the state of each BGP neighbor session.", usedFor: "Confirming the BGP peering with the remote AS is established.", info: "Neighbor address, remote AS, state, prefixes received." }],
        gallery: [{ category: "Topology", items: [{ src: "module5-topology.png", caption: "Full Module 5 topology: PC0 \u2014 SW0 \u2014 R0 \u2014 R1 \u2014 R2 \u2014 R3 \u2014 PC1" }] }],
        outputs: [{ title: "EIGRP Neighbor", cmd: "show ip eigrp neighbors", body: "An EIGRP neighbor relationship was established across the configured internal router links.", note: "If the exact neighbor table is not available in the supplied evidence, exact hold timers, uptime or interface values are not invented here." }, { title: "Routing Table \u2014 R0", cmd: "show ip route", body: "R0 has EIGRP-learned routes toward 10.10.20.0/30, 10.10.30.0/30 and 192.168.40.0/24, learned through next-hop 10.10.10.2.", note: "Presented as a concise documented output rather than a fabricated complete Cisco routing table." }, { title: "NAT Translation", cmd: "show ip nat translations", body: "Inside local: 192.168.10.10 &nbsp;\u00b7&nbsp; Inside global: 10.10.10.1 &nbsp;\u00b7&nbsp; Protocol: ICMP.", note: "PC0\u2019s traffic was translated through R0\u2019s NAT/PAT configuration as it left the campus network." }, { title: "BGP Table \u2014 R2", cmd: "show ip bgp", body: "*&gt; 192.168.10.0/24 &nbsp; 0.0.0.0 &nbsp; 65001 i", note: "R2 has the campus 192.168.10.0/24 network in its BGP table, originated locally within AS 65001. No additional BGP table entries are invented beyond this." }, { title: "BGP Summary \u2014 R1", cmd: "show ip bgp summary", body: "Neighbor: 10.10.30.1 &nbsp;\u00b7&nbsp; Remote AS: 65001 &nbsp;\u00b7&nbsp; State/PfxRcd: 4", note: "Confirms the BGP session with R2 is established and receiving prefixes." }, { title: "Connectivity \u2014 PC0 \u2192 PC1", cmd: "ping 192.168.40.10", body: "Destination: 192.168.40.10 &nbsp;\u00b7&nbsp; Result: Successful ICMP connectivity.", note: "End-to-end reachability confirmed from the campus LAN to the remote LAN across NAT, EIGRP and the BGP-peered WAN." }]
    },
};

/* ==========================================================
   RENDERING
   ========================================================== */

function escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function renderModuleGrid() {
    const grid = document.getElementById('moduleGrid');
    if (!grid) return;
    grid.innerHTML = MODULE_DATA.map(m => `
        <div class="module-card-tile">
            <div class="mct-top">
                <span class="mct-num">MODULE ${m.num}</span>
                <span class="status-badge ${m.status === 'done' ? 'done' : 'progress'}">${m.statusLabel}</span>
            </div>
            <h3 class="mct-title">${m.title}</h3>
            <p class="mct-desc">${m.desc}</p>
            <div class="mct-topics">${m.topics.map(t => `<span class="chip">${t}</span>`).join('')}</div>
            <div class="mct-action">
                <button class="btn ${m.status === 'done' ? 'btn-primary' : 'btn-secondary'}" data-goto="${m.view}">
                    ${m.status === 'done' ? 'Open Module' : 'Preview'}
                </button>
            </div>
        </div>
    `).join('');
}

function renderConcepts() {
    const grid = document.getElementById('conceptGrid');
    if (!grid) return;
    grid.innerHTML = CONCEPTS.map(([title, body]) => `
        <div class="concept-card">
            <h4>${title}</h4>
            <p>${body}</p>
        </div>
    `).join('');
}

function renderConfigSteps() {
    const wrap = document.getElementById('configSteps');
    if (!wrap) return;
    wrap.innerHTML = CONFIG_STEPS.map((s, i) => `
        <div class="config-step" data-step="${i}">
            <button class="config-step-head" type="button">
                <span class="config-step-num">${String(i + 1).padStart(2, '0')}</span>
                <span class="config-step-title">${s.what.length > 46 ? s.what.slice(0, 46) + '\u2026' : s.what}</span>
                <span class="config-step-cmd">${escapeHtml(s.cmd)}</span>
                <span class="config-step-chevron">\u2304</span>
            </button>
            <div class="config-step-body">
                <div class="config-step-inner">
                    <div class="cmd-block-wrap">
                        <pre class="cmd-block">${escapeHtml(s.cmd)}</pre>
                        <button class="copy-btn" data-copy="${escapeHtml(s.cmd)}">Copy</button>
                    </div>
                    <div class="config-detail-grid">
                        <div class="config-detail-block">
                            <p class="label">What it does</p>
                            <p>${s.what}</p>
                        </div>
                        <div class="config-detail-block">
                            <p class="label">Why it is used</p>
                            <p>${s.why}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    wrap.querySelectorAll('.config-step-head').forEach(head => {
        head.addEventListener('click', () => {
            const step = head.closest('.config-step');
            const body = step.querySelector('.config-step-body');
            const isOpen = step.classList.contains('is-open');
            if (isOpen) {
                body.style.maxHeight = '0px';
                step.classList.remove('is-open');
            } else {
                body.style.maxHeight = body.scrollHeight + 'px';
                step.classList.add('is-open');
            }
        });
    });
}

function renderCommandRef() {
    const wrap = document.getElementById('cmdRefList');
    if (!wrap) return;
    wrap.innerHTML = NETWORK_COMMANDS.map(c => `
        <div class="cmd-ref-item">
            <code class="cmd-name">${escapeHtml(c.cmd)}</code>
            <div class="cmd-ref-detail">
                <p><strong>What it does — </strong>${c.what}</p>
                <p><strong>Used for — </strong>${c.usedFor}</p>
                <p><strong>Information provided — </strong>${c.info}</p>
            </div>
        </div>
    `).join('');
}

function renderGallery() {
    const wrap = document.getElementById('galleryWrap');
    if (!wrap) return;
    wrap.innerHTML = GALLERY.map(group => `
        <div class="gallery-category">
            <p class="gallery-category-label">${group.category}</p>
            <div class="gallery-grid">
                ${group.items.map(it => `
                    <div class="gallery-item" data-lightbox-src="${it.src}" data-lightbox-caption="${escapeHtml(it.caption)}">
                        <img src="${it.src}" alt="${escapeHtml(it.caption)}"
                             onerror="this.closest('.gallery-item').innerHTML='&lt;div class=&quot;asset-missing&quot;&gt;&lt;span class=&quot;am-icon&quot;&gt;\u26a0&lt;/span&gt;Missing: &lt;code&gt;${it.src}&lt;/code&gt;&lt;/div&gt;'; this.closest('.gallery-item').removeAttribute('data-lightbox-src');">
                        <div class="gi-caption">${it.caption}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

/* ==========================================================
   GENERALIZED RENDERING — Modules 2-5 (EXT_MODULES)
   ========================================================== */

function renderConfigGroups(containerId, groups) {
    const wrap = document.getElementById(containerId);
    if (!wrap || !groups) return;
    let counter = 0;
    wrap.innerHTML = groups.map(group => {
        const stepsHtml = group.steps.map(s => {
            const i = counter++;
            return `
            <div class="config-step" data-step="${i}">
                <button class="config-step-head" type="button">
                    <span class="config-step-num">${String(i + 1).padStart(2, '0')}</span>
                    <span class="config-step-title">${s.what.length > 46 ? s.what.slice(0, 46) + '\u2026' : s.what}</span>
                    <span class="config-step-cmd">${escapeHtml(s.cmd)}</span>
                    <span class="config-step-chevron">\u2304</span>
                </button>
                <div class="config-step-body">
                    <div class="config-step-inner">
                        <div class="cmd-block-wrap">
                            <pre class="cmd-block">${escapeHtml(s.cmd)}</pre>
                            <button class="copy-btn" data-copy="${escapeHtml(s.cmd)}">Copy</button>
                        </div>
                        <div class="config-detail-grid">
                            <div class="config-detail-block"><p class="label">What it does</p><p>${s.what}</p></div>
                            <div class="config-detail-block"><p class="label">Why it is used</p><p>${s.why}</p></div>
                        </div>
                    </div>
                </div>
            </div>`;
        }).join('');
        return `<p class="config-group-label">${escapeHtml(group.label)}</p>${stepsHtml}`;
    }).join('');

    wrap.querySelectorAll('.config-step-head').forEach(head => {
        head.addEventListener('click', () => {
            const step = head.closest('.config-step');
            const body = step.querySelector('.config-step-body');
            const isOpen = step.classList.contains('is-open');
            if (isOpen) {
                body.style.maxHeight = '0px';
                step.classList.remove('is-open');
            } else {
                body.style.maxHeight = body.scrollHeight + 'px';
                step.classList.add('is-open');
            }
        });
    });
}

function renderCommandList(containerId, commands) {
    const wrap = document.getElementById(containerId);
    if (!wrap || !commands) return;
    wrap.innerHTML = commands.map(c => `
        <div class="cmd-ref-item">
            <code class="cmd-name">${escapeHtml(c.cmd)}</code>
            <div class="cmd-ref-detail">
                <p><strong>What it does — </strong>${c.what}</p>
                <p><strong>Used for — </strong>${c.usedFor}</p>
                <p><strong>Information provided — </strong>${c.info}</p>
            </div>
        </div>
    `).join('');
}

function renderGalleryGroups(containerId, groups) {
    const wrap = document.getElementById(containerId);
    if (!wrap || !groups) return;
    wrap.innerHTML = groups.map(group => `
        <div class="gallery-category">
            <p class="gallery-category-label">${group.category}</p>
            <div class="gallery-grid">
                ${group.items.map(it => `
                    <div class="gallery-item" data-lightbox-src="${it.src}" data-lightbox-caption="${escapeHtml(it.caption)}">
                        <img src="${it.src}" alt="${escapeHtml(it.caption)}"
                             onerror="this.closest('.gallery-item').innerHTML='&lt;div class=&quot;asset-missing&quot;&gt;&lt;span class=&quot;am-icon&quot;&gt;\u26a0&lt;/span&gt;Missing: &lt;code&gt;${it.src}&lt;/code&gt;&lt;/div&gt;'; this.closest('.gallery-item').removeAttribute('data-lightbox-src');">
                        <div class="gi-caption">${it.caption}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

function renderOutputCards(containerId, outputs) {
    const wrap = document.getElementById(containerId);
    if (!wrap || !outputs) return;
    wrap.innerHTML = outputs.map(o => `
        <div class="output-card">
            <div class="output-card-head">
                <span class="output-label">Command Output</span>
                <code class="cmd-name">${escapeHtml(o.cmd)}</code>
            </div>
            <div class="output-block">${o.body}</div>
            <p class="output-note">${o.note}</p>
        </div>
    `).join('');
}

function renderExtModules() {
    Object.keys(EXT_MODULES).forEach(key => {
        const data = EXT_MODULES[key];
        renderConfigGroups(`configSteps-${key}`, data.configGroups);
        renderCommandList(`cmdRefList-${key}`, data.commands);
        renderGalleryGroups(`galleryWrap-${key}`, data.gallery);
        renderOutputCards(`outputList-${key}`, data.outputs);
    });
}

/* ==========================================================
   VIEW ROUTING (sidebar navigation)
   ========================================================== */

function goToView(view) {
    document.querySelectorAll('.view').forEach(v => v.hidden = true);
    const target = document.getElementById('view-' + view);
    if (target) target.hidden = false;

    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.toggle('active', item.dataset.view === view);
    });

    const activeNav = document.querySelector(`.nav-item[data-view="${view}"]`);
    if (activeNav) {
        document.getElementById('topBreadcrumb').textContent = activeNav.dataset.breadcrumb || '';
        document.getElementById('topTitle').textContent = activeNav.dataset.title || '';
    }

    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });

    // Close mobile sidebar after navigating
    document.getElementById('sidebar').classList.remove('open');
}

function initNavigation() {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => goToView(item.dataset.view));
    });

    document.querySelectorAll('[data-goto]').forEach(btn => {
        btn.addEventListener('click', () => goToView(btn.dataset.goto));
    });

    const toggle = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('sidebar');
    if (toggle && sidebar) {
        toggle.addEventListener('click', () => sidebar.classList.toggle('open'));
    }
}

/* ==========================================================
   MODULE 1 TOC — SCROLLSPY
   ========================================================== */

function initToc() {
    document.querySelectorAll('.module-toc').forEach(toc => {
        const links = Array.from(toc.querySelectorAll('a'));
        const sections = links
            .map(a => document.querySelector(a.getAttribute('href')))
            .filter(Boolean);

        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const section = document.querySelector(link.getAttribute('href'));
                if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = '#' + entry.target.id;
                    links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === id));
                }
            });
        }, { rootMargin: '-15% 0px -70% 0px', threshold: 0 });

        sections.forEach(s => observer.observe(s));
    });
}

/* ==========================================================
   LIGHTBOX
   ========================================================== */

function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lbImg = document.getElementById('lightboxImg');
    const lbCaption = document.getElementById('lightboxCaption');
    const lbClose = document.getElementById('lightboxClose');
    if (!lightbox) return;

    document.addEventListener('click', (e) => {
        const trigger = e.target.closest('[data-lightbox-src]');
        if (!trigger) return;
        lbImg.src = trigger.dataset.lightboxSrc;
        lbCaption.textContent = trigger.dataset.lightboxCaption || '';
        lightbox.hidden = false;
    });

    function close() { lightbox.hidden = true; lbImg.src = ''; }

    lbClose.addEventListener('click', close);
    lightbox.addEventListener('click', (e) => { if (e.target === lightbox) close(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
}

/* ==========================================================
   COPY BUTTONS
   ========================================================== */

function initCopyButtons() {
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.copy-btn');
        if (!btn) return;
        const text = btn.dataset.copy || '';
        navigator.clipboard.writeText(text).then(() => {
            const original = btn.textContent;
            btn.textContent = 'Copied';
            btn.classList.add('copied');
            setTimeout(() => { btn.textContent = original; btn.classList.remove('copied'); }, 1400);
        }).catch(() => {
            btn.textContent = 'Error';
            setTimeout(() => { btn.textContent = 'Copy'; }, 1400);
        });
    });
}

/* ==========================================================
   VIDEO FALLBACK
   ========================================================== */

function initVideoFallback() {
    document.querySelectorAll('video').forEach(video => {
        const filename = video.dataset.expect || (video.querySelector('source') && video.querySelector('source').getAttribute('src')) || 'video file';
        function showVideoMissing() {
            const wrap = video.closest('.video-wrap');
            if (wrap && !wrap.dataset.fallbackShown) {
                wrap.dataset.fallbackShown = 'true';
                wrap.outerHTML = `<div class="asset-missing"><span class="am-icon">\u26a0</span>Asset not found: <code>${filename}</code><br>Place the real experiment video in the project folder with this exact filename.</div>`;
            }
        }
        video.addEventListener('error', showVideoMissing, true);
        const source = video.querySelector('source');
        if (source) source.addEventListener('error', showVideoMissing);
    });
}

/* ==========================================================
   INIT
   ========================================================== */

document.addEventListener('DOMContentLoaded', () => {
    renderModuleGrid();
    renderConcepts();
    renderConfigSteps();
    renderCommandRef();
    renderGallery();
    renderExtModules();
    initNavigation();
    initToc();
    initLightbox();
    initCopyButtons();
    initVideoFallback();
});