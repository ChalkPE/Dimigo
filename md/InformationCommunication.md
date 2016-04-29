# 고1 정보통신 1학기 1차 지필고사 요약
한국디지털미디어고등학교 15기 1학년 4반 박준영

## 목차 _Table of contents_
- [고1 정보통신 1학기 1차 지필고사 요약](#1-1-1-)
	- [목차 _Table of contents_](#-table-of-contents)
	- [라이선스 _License_](#-license)
	- [제I부 정보 통신의 개요](#i-)
		- [Section 01 정보통신의 발달](#section-01-)
			- [(1) 통신의 개념](#1-)
			- [(2) 통신 모형과 기능](#2-)
			- [~~(3) 정보 통신과 정보 사회~~](#3-)
			- [(4) 표준화와 표준화 기구](#4-)
		- [Section 02 통신 프로토콜과 OSI 참조 모델](#section-02-osi-)
			- [(1) 통신 프로토콜의 개요](#1-)
			- [~~(2) 계층형 네트워크 구조~~](#2-)
			- [(3) 프로토콜의 기능](#3-)
			- [(4) OSI 참조 모델](#4-osi-)
		- [Section 03 정보 통신망의 형태](#section-03-)
			- [(1) 정보 통신망의 개요](#1-)
			- [(2) 정보 통신망의 주요 기술](#2-)
			- [(3) 정보 통신망의 구성 형태](#3-)
				- [(가) 버스형 _Bus type_](#-bus-type)
				- [(나) 고리형 _Ring type_](#-ring-type)
				- [(다) 그물형 _Mesh type_](#-mesh-type)
				- [(라) 성형 _Star type_](#-star-type)
				- [(마) 나무형 _Tree type_](#-tree-type)
				- [~~(바) 격자형~~](#-)
		- [Section 04 정보 통신망의 종류](#section-04-)
			- [(1) 근거리 통신망 _Local Area Network_](#1-local-area-network)
			- [(2) 공중 통신망 _Public Network_](#2-public-network)
				- [(가) 공중 통신망의 개요](#-)
				- [(나) 공중 전화망과 공중 교환 데이터망](#-)
				- [(다) 종합 정보 통신망 _ISDN: Integrated Service Digital Network_](#-isdn-integrated-service-digital-network)
			- [(3) 이동·위성 통신망](#3-)
				- [(나) 셀룰러 시스템](#-)
				- [(다) IMT-2000](#-imt-2000)
	- [제2부 근거리 통신망](#2-)
		- [Section 01 LAN의 기술](#section-01-lan-)
			- [(1) LAN의 개념](#1-lan-)
			- [(3) OSI 표준 모델과 LAN 프로토콜](#3-osi-lan-)
				- [(다) IEEE 802 표준](#-ieee-802-)
				- [(라) LAN 표준](#-lan-)
				- [(마) LAN 프로토콜](#-lan-)
			- [(4) LAN 전송 매체](#4-lan-)
				- [(가) 신호를 전송하는 방법](#-)
				- [(나) 전송 매체의 종류 및 특성](#-)
			- [(5) 매체 접근 제어 _Media Access Control_](#5-media-access-control)
				- [(가) CSMA/CD _Carrier Sense Multiple Access/Collision Detect_](#-csmacd-carrier-sense-multiple-accesscollision-detect)
				- [(나) CSMA/CA _Carrier Sense Multiple Access/Collision Avoidance_](#-csmaca-carrier-sense-multiple-accesscollision-avoidance)
				- [(다) 토큰링 _Token ring_](#-token-ring)
		- [Section 02 LAN의 종류](#section-02-lan-)
			- [(1) 이더넷 _Ethernet_](#1-ethernet)

## 라이선스 _License_
```
The MIT License (MIT)

Copyright (c) 2016 Chalk

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 제I부 정보 통신의 개요
### Section 01 정보통신의 발달

#### (1) 통신의 개념
- 통신 _Communication_: 상대방과 원하는 **정보**를 신속하고 정확하게 **전달**
- `실시간성`, `멀티미디어성`, `대용량성`, `정확성`, `신속성`, `광대역성`, `경제성`, `공유성`

| 데이터 | 정보 |
| :--: | :--: |
| 수치, 값 | → 가공 |

- **광대역** _Broadband_: 주파수 대역 > 음성 대역; 음성, 데이터; **넓음, 빠름**
- **협대역** _Narrowband_: 주파수 대역 ≤ 음성 대역; 음성; ↔ 광대역

#### (2) 통신 모형과 기능
- 샤논의 통신 모형

| 송신기<br>_Transmitter_ | → | 통신로 | → | 수신기<br>_Receiver_ |
| :-: | :-: | :-: | :-: | :-: |
| &nbsp; | &nbsp; | ↑<br>**잡음원**<br>_Noise source_ | &nbsp; | &nbsp; |

- 아날로그 신호 _Analog_: 시간에 따라 크기와 형태가 **점진적**이고 **연속적** _Continuous_
- 디저털 신호 _Digital_: 시간과 크기가 모두 **이산적** _Discrete_

#### ~~(3) 정보 통신과 정보 사회~~

#### (4) 표준화와 표준화 기구
- **표준**의 필요성: **효율적**인 운용성 확보, 상호 간의 **호환성**
- 국제 표준화 기구
    - **ITU** (국제 전기 통신 연합)
    - **ISO** (국제 표준화 기구)
    - **IEC** (국제 전기 표준 회의)
    - **ANSI** (미국 표준 협회)
    - **IAB** (인터넷 아키텍처 위원회)
- 우리나라의 표준화
    - **TTA** (한국 정보 통신 기술 협회)
    - **KATS** (한국 기술 표준원)

### Section 02 통신 프로토콜과 OSI 참조 모델

#### (1) 통신 프로토콜의 개요
- **프로토콜** _Protocol_: 약속, 규약; 서로 상이한 시스템 간의 호환이 가능하도록 해 주는 일련의 규정 및 절차
- **개방형 시스템** _Open system_: 어떠한 기종과도 접속될 준비가 되어 있는 시스템
- 프로토콜의 **계층화 구조**: `순차적`, `독립적`, `모듈별 분리`; 동위 _Peer_ 계층 간의 통신 가능

#### ~~(2) 계층형 네트워크 구조~~

#### (3) 프로토콜의 기능
1. **단편화** _Fragmentation_: 큰 규모의 메세지 → **같은 크기의 작은 블록**<br>**재합성** _Reassembly_: 단편화된 프레임 → **메세지**
2. **캡슐화**: 단편화된 블록 **+ 각종 제어 정보** (주소 비트, 에러 검출 비트 등); 헤더, 트리밀러
3. **연결 제어**:
    - **접속형** _Connection oriented data transfer_: 물리적인 연결과 같은 **가상적 연결 상태**; IPTV
    - **비접속형** _Connectionless data transfer_: **논리적인 연결이 없는** 데이터 전송; 라디오
4. **흐름 제어** _Flow control_: 데이터의 **양이나 속도**를 **수신 측에서 조절**
5. **오류 제어** _Error control_: 데이터 및 제어 정보의 **파손에 대비**하는 기법
6. **동기화** _Synchronization_: 송신 측과 수신 측의 **타이밍** _Timing_ 을 정확히 **맞추는** 기법
7. **순서화** _Sequencing_: 전송된 데이터들이 **보낸 순서대로** 되어 있는지 **명시**하는 기능
8. **주소화** _Addressing_: 송수신 양측 간의 **인식**이 **가능**하게 하는 기법
9. **다중화** _Multiplexing_: **하나**의 전송로로 **여러 개**의 데이터 신호를 **혼합**해 **전송**하는 방법

#### (4) OSI 참조 모델
- **ISO**에서 제시; 통신망을 통한 상호 접속에 필요한 제반 통신 절차를 크게 **7개의 계층** _Layer_ 으로 나누어 정의

| 계층 | 명칭 | 특징 | 규격·프로토콜 |
| :--: | :--: | :--: | :--: |
| **7** | **응용** _Application_ | 인터페이스 역할 | |
| **6** | **표현** _Presentation_ | 부호화·역부호화, 암호화·해독화, 압축·전개 | |
| **5** | **세션** _Session_ | 데이터 교환 조직화; 세션 연결 확립·유지·동기화 | |
| **4** | **전송** _Transport_ | 종단 간 제어; 포트·소켓 주소; 상·하위 인터페이스 | `TCP` `UDP` |
| **3** | **네트워크** _Network_ | 네트워크 연결 설정; 종단 간 논리적 링크 구성; 스위칭, 라우팅 | `IP` `X.25` |
| **2** | **데이터 링크** _Data link_ | 이웃한 노드 간의 데이터 전송; CRC 오류 제어 | `HDLC` `SDLC` `LAP-B` |
| **1** | **물리** _Physical_ | 송수신 간의 물리적 링크의 설정·유지·해제 | `RS-232` `RS-422` `X.21` |

### Section 03 정보 통신망의 형태

#### (1) 정보 통신망의 개요
- **교환 통신망** _Switched Communication Network_: 송신 스테이션 → 여러 개의 노드 → 최종 수신 스테이션
- **방송 통신망** _Broadcast Communication Network_: 교환 노드 없이 스테이션들이 통신 매체를 공유

#### (2) 정보 통신망의 주요 기술
- **메시지 교환망**: 교환기가 전체 메시지를 받았다가 적절한 경로를 통해 수신자에게 전달하는 교환망
- **패킷 교환망**: 데이터 블록 (패킷: 분할된 데이터 + 주소) → 패킷 교환기가 적당한 통신 경로 선택해 전송

#### (3) 정보 통신망의 구성 형태

##### (가) 버스형 _Bus type_
- **특징**: 방송 통신 형태, 송신 대기 상태 빈번, 모든 단말기에 동시에 데이터 전달
- **장점**: 간단, 저렴, 추가·제거 용이
- **단점**: 트래픽이 높으면 네트워크 효율 저하

##### (나) 고리형 _Ring type_
- **특징**: 이웃한 것끼리만 연결; 양방향 데이터 전송; 모든 노드 접속 기회 동일
- **장점**: 노드 연결 최소화; 분산·집중 제어
- **단점**: 설치·운영 비용 큼; 추가·변경 곤란

##### (다) 그물형 _Mesh type_
- **특징**: 통신 회선 총 길이 긺
- **장점**: 신뢰성·가용성·효율성 양호
- **단점**: 회선 비용 큼; 설치 어려움; 관리 복잡

##### (라) 성형 _Star type_
- **특징**: 중앙 집중 방식: 중앙의 컴퓨터가 모든 통신 제어
- **장점**: 고장 발견·수리 등 제어 간편; 구현 용이
- **단점**: 통신 회선 많이 필요; 중앙 노드 고장 시 전체 네트워크 마비

##### (마) 나무형 _Tree type_
- **특징**: 일정 지역 단말기들을 하나로, 다음 단말기는 그로부터 연장되는 형태
- **장점**: 제어 간단; 네트워크 확장·관리 용이; 전송 선로 짧음
- **단점**: 최상위 중앙 노드에 병목 현상 발생 가능

##### ~~(바) 격자형~~
- **특징**: 2차원적인 형태
- **장점**: 신뢰성 우수
- **단점**: 네트워크 구성 복잡

### Section 04 정보 통신망의 종류

#### (1) 근거리 통신망 _Local Area Network_
- **근거리 통신망** _LAN_: 자원 공유를 목적으로 가까운 지역 내에 구성
- **도시권 통신망** _MAN_: 대도시; LAN들을 연결
- **광역 통신망** _WAN_: 국가·대륙; 각 지역에 분포하는 LAN·MAN 상호 접속; 공중 통신망

#### (2) 공중 통신망 _Public Network_

##### (가) 공중 통신망의 개요
- **비동기 전송 방식** _ATM: Asynchronous Transfer Mode_:
    - ATM 셀: **53바이트 고정 길이** 블록; 5바이트 헤더; 고속; B-ISDN의 핵심 기술

##### (나) 공중 전화망과 공중 교환 데이터망
- **공중 전화망** _PSTN: Public Switched Telephone Network_:
    - **음성 대역**, 데이터 전달에는 부적합; 디지털 데이터 전송 시 **64kbps** 제한; 망 이용 효율 낮음
- **공중 교환 데이터망** _PSDN: Public Switched Data Network_:
    - 데이터 전송 효율 우수; X.25 프로토콜

##### (다) 종합 정보 통신망 _ISDN: Integrated Service Digital Network_
| B채널 | D채널 |
| :-: | :-: |
| **64kbps** | **16kbps** |

| N-ISDN | 전송 속도 |
| -: | :-: |
| **2B+D** | **144kbps** |
| **23B+D** | **1.544Mbps** |
| **30B+D** | **2.048Mbps** |

- **N-ISDN** _Narrowband-ISDN_: 음성·영상·데이터 통합적으로 제공; **음성 위주**; **64kbps 기반**, 최대 대역폭 **2Mbps**; 패킷 교환
- **B-ISDN** _Broadband-ISDN_: 광대역; 155.52Mbps, 622.08Mbps; **ATM 교환기**, **광섬유** 케이블 요구; ATM 교환

#### (3) 이동·위성 통신망
- **주파수 분할 다원 접속** _FDMA: Frequency Division Multiple Access_
- **시분할 다원 접속** _TDMA: Time Division Multiple Access_
- **부호분할 다원 접속** _CDMA: Code Division Multiple Access_: FDMA + TDMA

##### (나) 셀룰러 시스템
- **핸드오프**: 셀 → 셀: 통화 채널 자동 전환
- **위치 등록**: 자신의 위치를 갱신하는 일련의 과정
    - **로밍**: 지역을 벗어나서 위치 등록을 할 경우

##### (다) IMT-2000
3세대 이동통신,  2GHz 주파수 대역 사용; 국제 표준화된 이동 전화망의 접속 표준 사용; 국제 로밍 가능

## 제2부 근거리 통신망

### Section 01 LAN의 기술

#### (1) LAN의 개념
- **네트워크** _Network_: 컴퓨터 망을 이용해 정보를 교환하는 것
- **LAN의 특징**: 지역적 범위 < 1km; 전송 속도 10-100Mbps; 오류 낮음, 안정성 높음;자원 공유, 정보 처리 비용 절감

#### (3) OSI 표준 모델과 LAN 프로토콜

##### (다) IEEE 802 표준
| 권고 번호 | IEEE 802 표준안 |
| :----: | :----: |
| IEEE 802.3 | CDMA/CD |
| IEEE 802.5 | 토큰링 |
| IEEE 802.11 | 무선 LAN; CSMA/CA |

##### (라) LAN 표준
| OSI 7계층 | LAN 표준 | 구현의 예 |
| :-----: | :-----: | :-----: |
| 데이터 링크 계층 | 논리 링크 제어 계층 _LLC_ | 상위 계층 인터페이스 |
| 데이터 링크 계층 | 매체 접근 제어 계층 _MAC_ | CSMA/CD, CSMA/CA |
| 물리 계층 | 물리 계층 | UTP 케이블, 동축 케이블, 광섬유 |

- MAC 주소의 구성

| 00 - 24 - 21 | - | 21 - D5 - 75 |
| :----------: | - | :----------: |
| OUI 값<br>LAN 카드 제조업체가 부여 | &nbsp; | 제품 번호<br>00:00:00 - FF:FF:FF |

##### (마) LAN 프로토콜
- **TCP/IP**: 인터넷 표준 프로토콜; 신뢰성 있는 전송 보장
- **IPX/SPX**: 빠른 라우팅; 중소규모 네트워크에 적합
- **NetBEUI**: 작은 메모리 점유, 빠른 전송 속도, 설정의 편리함; 외부 네트워크 연결 불가, 거의 안 씀

#### (4) LAN 전송 매체
##### (가) 신호를 전송하는 방법
- **베이스밴드** _Baseband_: 디지털 신호를 **디지털 신호 그대로 전송**
- **브로드밴드** _Baseband_: 디지털 신호를 **아날로그 신호로 변조하여 전송**

| 10 | Base | 2 |
| :-: | :-: | :-: |
| 최대 전송 속도<br>Mbps 단위 | 전송 방식 | 전송 속도<br>전송 매체 |

| 규격 | 최대 전송 속도 | 전송 매체 |
| :----: | :----: | :----: |
| 10BaseT | 10Mbps | TP 케이블 |
| 10Base5 | 10Mbps | 동축 케이블, 12mm |
| 10Base2 | 10Mbps | 동축 케이블, 5mm |
| 100BaseT | 100Mbps | UTP 케이블 |
| 1000BaseT | 1000Mbps | UTP 케이블 |

##### (나) 전송 매체의 종류 및 특성
| 케이블 | 특징 | 장점 | 단점 | 용도 |
| :--: | :--: | :--: | :--: | :--: |
| **UTP** _Unshielded Twisted Pair_ | 8가닥이 2가닥씩 4쌍 꼬여 있는 비차폐 케이블 | 노드 구축 간편, 가격 저렴 | 잡음에 약함, 전송 거리 제한 | 가장 보편적인 전송 매체 |
| **동축** | 가격, 데이터 전송 거리, 전자파 간섭, 유연성 등 UTP 케이블과 광섬유 케이블의 중간 특성 | 차폐성, 광대역 | 감쇄, 열잡음 | 요즘은 거의 안 씀 |
| **광섬유** | 가는 유리 섬유에 빛을 이용해 정보 전송; 광대역 | 빠름, 오류 적음, 전기적 간섭 없음, 작고 가벼움 | 비쌈, 설치 어려움 | 원거리 연결·초고속 네트워크 |

#### (5) 매체 접근 제어 _Media Access Control_
| 구분 | 방식 | 용도 |
| :-: | :-: | :-: |
| 유선 멀티 드롭 방식 | CSMA/CD | 802.3 이더넷 |
| 유선 멀티 드롭 방식 | 토큰링 | 802.5 |
| 유선 멀티 드롭 방식 | 토큰 버스 | 802.4 |
| 유선 멀티 드롭 방식 | 토큰 패싱 | FDDI |
| 패킷 라디오 방식 | CSMA/CA | 802.11 무선 LAN |

- **멀티 드롭 방식**: 하나에 회선에 여러 단말을 접속하는 방식
- **FDDI** _Fiber Distributed-Data Interface_: 근거리 통신망 광케이블 전송 표준; 200km까지 연장 가능; 토큰링 기반

##### (가) CSMA/CD _Carrier Sense Multiple Access/Collision Detect_
- **CSMA/CD**: 자료를 전송하는 동안 회선을 감시, 충돌을 감지되면 즉각 전송을 종료; 버스형 LAN에 적용

| 구분 | 의미 |
| :-: | :-: |
| **CS** _Carrier Sense_ | 데이터 전송 전, 선로의 사용 여부를 전기 신호의 유무로 파악 |
| **MA** _Multiple Access_ | 선로가 비어 있으면 어느 스테이션에서든지 데이터 전송 |
| **CD** _Collision Detection_ | 메시지 전달 시 충돌 여부 탐색 |

| 특징 | 장점 | 단점 |
| :-: | :-: | :-: |
| LAN 시스템에서 가장 일반적으로 사용됨 | 저렴함 | 노드 수·전송량 多 → 충돌 多 → 데이터 손실 발생 多 |

##### (나) CSMA/CA _Carrier Sense Multiple Access/Collision Avoidance_
- **CSMA/CA**: **무선 LAN**에서 사용; CSMA/CD와 유사, 충돌 대응 다름
- 무선 네트워크에서는 충돌 감지 불가한 경우 많음 → CSMA/CA 통해 확률적으로 **충돌 회피**

| 송신 측 | ↔ | 수신 측 | 설명 |
| :---: | :-: | :---: | :---: | :---: |
| **RTS** _Request To Send_ | → | ↓ 수신 측 ↓ | 목적지, 송신 측 주소, 데이터 크기 등의 정보 |
| ↓ 송신 측 ↓ | ← | **CTS** _Clear To Send_ | 정보를 받을 준비가 됨 |
| 정보 _DATA_ | → | ↓ 수신 측 ↓ | |
| 끝 | ← | **ACK** _Acknowledge character_ | 정보 수신 후 보내는 응답 문자 |

##### (다) 토큰링 _Token ring_
- **토큰링**: 링 형태의 네트워크에서 불필요한 CSMA/CD 방식에서의 선로 감시 신호를 제거; **토큰 패싱** 개념
- **토큰링 네트워크**: 토큰 _Token_ 을 보유한 **하나의 스테이션**만이 네트워크 **사용 권한 독점**


- **전송 방식**
    - 데이터 전송 **없음** → 프리 토큰 _Free token_ 이 네트워크 순환
    - 데이터 전송 **원함** → 프리 토큰 획득 후 비지 토큰 _Busy token_ 으로 변경
    - 데이터 전송 **받음** → 정보 획득 후 토큰 반환 _Free token_
- **장점**
    - 충돌이 발생하지 않는 구조; 데이터 손실 없음; **CSMA/CD보다 안정적**
    - 거리나 노드의 제약 없음
- **단점**
    - **CSMA/CD보다** 구현이 **복잡하고 비쌈**
    - **토큰 분실** 가능성 → 적절한 **토큰 관리** 필요

| 구분 | 설명 | 비고 |
| :-: | :-: | :-: |
| **유니캐스트** _Unicast_ | 전송 → 모두 받음 → 자기 거 아니면 버림 | LAN에서 가장 많이 사용 |
| **브로드캐스트** _Broadcast_ | 모두에게 전송 → 모두 무조건 받음 | MAC 주소 FFFF.FFFF.FFFF |
| **멀티캐스트** _Multicast_ | 특정 그룹에게만 정보 전송 | 효율적, 트래픽 감소 |

### Section 02 LAN의 종류

#### (1) 이더넷 _Ethernet_
이
