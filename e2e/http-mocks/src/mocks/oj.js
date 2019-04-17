const rest = require('../lib/restClient')

module.exports = {
  poj: {
    backend_ok() {
      // TODO: 等到 bug 修复之后重新改回 client
      // 看起来是这里的问题： https://github.com/jamesdbloom/mockserver/issues/599
      return rest({
        httpRequest: {
          path: '/userstatus',
          queryStringParameters: {
            user_id: ['vjudge5'],
          },
          headers: {
            host: ['poj.org:80'],
          },
        },
        httpResponse: {
          statusCode: 200,
          headers: {
            'Content-Type': ['text/html; charset=utf-8'],
          },
          body: pojResponse,
        },
      })
    },
  },
}

/*
SOLVED: 1968
SUBMISSIONS: 277562
 */
const pojResponse = `<html><head><meta http-equiv="Pragma" content="no-cache"><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><meta http-equiv="Content-Language" content="en-US"><title>User -- vjudge5</title><link rel=stylesheet href='poj.css' type='text/css'><link rel='shortcut icon' href='poj.ico'><link rel='icon' href='poj.gif' type='image/gif'><script src='poj.js' language='javascript'></script></head><body lang="en-US" leftmargin=5 link=blue alink=blue vlink=blue onkeydown=KeyDown(event)><a name=top></a><TABLE style='BORDER-COLLAPSE: collapse' borderColor=#ffffff width=100% border=1><TBODY><TR><TD align=CENTER colSpan=5><table class=h1 cellpadding=0><tr><td width=25% align=left><img src='images/logo1.jpg' height=100 border=0></td><td colspan=3 bgcolor='#EAEFFD'><table class=h2><tr><td><img border=0 src='images/logo0.gif' width=450 height=90></td><td width=95><img border=0 src='images/logo3.gif' width=95 height=95></td></tr></table></td></tr></table></TD></TR><TR vAlign=top align=CENTER bgColor=#6589d1><TH class=h>Online Judge</TH><TH class=h>Problem Set</TH><TH class=h>Authors</TH><TH class=h>Online Contests</TH><TH class=h>User</TH></TR><TR vAlign=top align=CENTER bgColor='#f1f1fd'><TD class='h' onMouseOver='scbg(this, 1)' onMouseOut='scbg(this, 0)'><A href='bbs'>Web Board</A><BR><A href='./'>Home Page</A><BR><A href='page?id=1000' target=_blank>F.A.Qs</A><BR><a href='chart'>Statistical Charts</a></TD><TD class='h' onMouseOver='scbg(this, 1)' onMouseOut='scbg(this, 0)'><FORM action=gotoproblem method=get><A href='problemlist'>Problems</A><BR><A href='submit'>Submit Problem</A><BR><A href='status'>Online Status</A><BR><font color=blue>Prob.ID:</font><input type=text name=pid size=6><input type=Submit value=Go name=pb1></form></td><TD class='h' onMouseOver='scbg(this,1)' onMouseOut='scbg(this,0)'><form method=GET action=searchuser><a href=register>Register</a><br><a href=modifyuser>Update your info</a><br><a href=userlist>Authors ranklist</a><br><input type=text name=key size=10><input type=Submit value=Search name=B1></form></TD>
<TD class=h onMouseOver='scbg(this,1)' onMouseOut='scbg(this,0)'><font color=#1a5cc8>Current Contest</font><br><a href=pastcontests>Past Contests</a><br><a href=contests>Scheduled Contests</a><br><a href=challenge.html target=_blank><font color=red>Award Contest</font></a></td><TD align=left class=h onMouseOver='scbg(this,1)' onMouseOut='scbg(this,0)'><form method=POST action=login><table><tr><td>User ID:</td><td><input type=text name=user_id1 size=10 style='font-family:monospace'></td></tr><tr><td>Password:</td><td><input type=password name=password1 size=10 style='font-family:monospace'></td></tr></table><input type=Submit value=login name=B1>&nbsp;&nbsp;<a href=register target=_parent>Register</a><input type=hidden name=url value=/userstatus?user_id=vjudge5></form></td></TR></TABLE><center>
<font size=5 color=blue><a href=send?to=vjudge5>vjudge5--黄汉升 @ vjudge.net  </a></font><br>
Last Loginned Time:2019-03-31 13:43:20.0<br>
<TABLE cellSpacing=0 cellPadding=0 width=700 border=1 background=images/table_back.jpg style="border-collapse: collapse" bordercolor=#FFFFFF>
<tr valign=bottom><td colspan=3><br><form action=usercmp method=get>Compare <input type=text size=10 name=uid1 value=vjudge5>and <input type=text size=10 name=uid2 value=><input type=submit value=GO></form></td></tr><tr><td width=15% align=left>Rank:</td>
<td align=center width=25%><font color=red>18</font></td>
<td width=60% align=center>Solved Problems List</td> </tr>
<tr><td width=15% align=left>Solved:</td>
<td align=center width=25%><a href=status?result=0&user_id=vjudge5>1968</a></td>
<td width=60% align=center rowspan=4>
<script type="text/javascript">
function p(id)
{
document.write("<a href=problem?id="+id+">"+id+" </a>")
}
p(1000)
p(1001)
p(1002)
p(1003)
p(1004)
p(1005)
p(1006)
p(1007)
p(1008)
p(1009)
p(1010)
p(1011)
p(1012)
p(1013)
p(1014)
p(1015)
p(1016)
p(1017)
p(1018)
p(1019)
p(1020)
p(1021)
p(1022)
p(1023)
p(1024)
p(1025)
p(1026)
p(1027)
p(1028)
p(1029)
p(1031)
p(1032)
p(1033)
p(1035)
p(1036)
p(1037)
p(1038)
p(1039)
p(1040)
p(1041)
p(1042)
p(1043)
p(1044)
p(1045)
p(1046)
p(1047)
p(1048)
p(1050)
p(1051)
p(1053)
p(1054)
p(1056)
p(1057)
p(1059)
p(1060)
p(1061)
p(1062)
p(1063)
p(1064)
p(1065)
p(1066)
p(1067)
p(1068)
p(1069)
p(1073)
p(1077)
p(1080)
p(1082)
p(1083)
p(1084)
p(1085)
p(1087)
p(1088)
p(1089)
p(1091)
p(1094)
p(1095)
p(1096)
p(1099)
p(1100)
p(1101)
p(1102)
p(1103)
p(1105)
p(1106)
p(1107)
p(1111)
p(1112)
p(1113)
p(1117)
p(1118)
p(1119)
p(1120)
p(1122)
p(1125)
p(1126)
p(1127)
p(1128)
p(1129)
p(1130)
p(1131)
p(1132)
p(1133)
p(1135)
p(1137)
p(1139)
p(1140)
p(1141)
p(1142)
p(1143)
p(1144)
p(1145)
p(1146)
p(1147)
p(1149)
p(1150)
p(1151)
p(1152)
p(1154)
p(1155)
p(1156)
p(1157)
p(1159)
p(1160)
p(1161)
p(1163)
p(1164)
p(1166)
p(1167)
p(1169)
p(1170)
p(1172)
p(1173)
p(1174)
p(1175)
p(1176)
p(1177)
p(1178)
p(1179)
p(1180)
p(1182)
p(1183)
p(1184)
p(1185)
p(1186)
p(1187)
p(1189)
p(1190)
p(1191)
p(1192)
p(1195)
p(1198)
p(1200)
p(1201)
p(1202)
p(1204)
p(1205)
p(1207)
p(1208)
p(1209)
p(1217)
p(1218)
p(1220)
p(1221)
p(1222)
p(1226)
p(1228)
p(1229)
p(1230)
p(1231)
p(1234)
p(1236)
p(1237)
p(1239)
p(1240)
p(1243)
p(1244)
p(1245)
p(1247)
p(1248)
p(1250)
p(1251)
p(1252)
p(1254)
p(1256)
p(1258)
p(1259)
p(1260)
p(1263)
p(1264)
p(1265)
p(1266)
p(1269)
p(1270)
p(1271)
p(1272)
p(1273)
p(1274)
p(1275)
p(1276)
p(1277)
p(1278)
p(1279)
p(1281)
p(1283)
p(1284)
p(1285)
p(1286)
p(1287)
p(1288)
p(1289)
p(1291)
p(1292)
p(1293)
p(1295)
p(1297)
p(1298)
p(1300)
p(1302)
p(1305)
p(1306)
p(1308)
p(1312)
p(1313)
p(1315)
p(1316)
p(1317)
p(1318)
p(1319)
p(1320)
p(1321)
p(1322)
p(1323)
p(1324)
p(1325)
p(1326)
p(1328)
p(1329)
p(1330)
p(1331)
p(1336)
p(1337)
p(1338)
p(1339)
p(1348)
p(1349)
p(1350)
p(1351)
p(1352)
p(1354)
p(1355)
p(1363)
p(1364)
p(1365)
p(1375)
p(1376)
p(1379)
p(1380)
p(1383)
p(1384)
p(1385)
p(1386)
p(1389)
p(1390)
p(1392)
p(1401)
p(1403)
p(1405)
p(1407)
p(1408)
p(1409)
p(1410)
p(1411)
p(1416)
p(1417)
p(1418)
p(1419)
p(1420)
p(1422)
p(1423)
p(1426)
p(1430)
p(1432)
p(1434)
p(1436)
p(1438)
p(1440)
p(1442)
p(1446)
p(1450)
p(1451)
p(1453)
p(1455)
p(1456)
p(1458)
p(1459)
p(1460)
p(1461)
p(1463)
p(1465)
p(1466)
p(1469)
p(1470)
p(1472)
p(1473)
p(1474)
p(1475)
p(1476)
p(1477)
p(1478)
p(1481)
p(1482)
p(1484)
p(1485)
p(1486)
p(1487)
p(1488)
p(1489)
p(1493)
p(1496)
p(1502)
p(1503)
p(1504)
p(1505)
p(1507)
p(1509)
p(1511)
p(1514)
p(1515)
p(1517)
p(1519)
p(1520)
p(1521)
p(1523)
p(1524)
p(1526)
p(1528)
p(1529)
p(1539)
p(1543)
p(1546)
p(1547)
p(1548)
p(1552)
p(1555)
p(1556)
p(1560)
p(1562)
p(1563)
p(1564)
p(1565)
p(1566)
p(1568)
p(1569)
p(1573)
p(1575)
p(1577)
p(1578)
p(1579)
p(1580)
p(1581)
p(1583)
p(1584)
p(1586)
p(1589)
p(1591)
p(1592)
p(1595)
p(1597)
p(1598)
p(1601)
p(1603)
p(1604)
p(1606)
p(1607)
p(1608)
p(1609)
p(1611)
p(1612)
p(1620)
p(1621)
p(1623)
p(1625)
p(1628)
p(1631)
p(1632)
p(1634)
p(1635)
p(1636)
p(1637)
p(1639)
p(1642)
p(1644)
p(1647)
p(1650)
p(1651)
p(1654)
p(1655)
p(1656)
p(1657)
p(1658)
p(1659)
p(1661)
p(1663)
p(1664)
p(1665)
p(1666)
p(1671)
p(1673)
p(1674)
p(1676)
p(1677)
p(1678)
p(1679)
p(1681)
p(1682)
p(1683)
p(1684)
p(1686)
p(1687)
p(1688)
p(1690)
p(1691)
p(1692)
p(1693)
p(1694)
p(1695)
p(1696)
p(1697)
p(1698)
p(1699)
p(1700)
p(1701)
p(1702)
p(1703)
p(1704)
p(1706)
p(1707)
p(1710)
p(1715)
p(1716)
p(1717)
p(1719)
p(1721)
p(1722)
p(1723)
p(1724)
p(1726)
p(1729)
p(1730)
p(1731)
p(1733)
p(1734)
p(1735)
p(1737)
p(1738)
p(1739)
p(1740)
p(1741)
p(1742)
p(1743)
p(1744)
p(1745)
p(1747)
p(1749)
p(1750)
p(1751)
p(1752)
p(1753)
p(1754)
p(1755)
p(1759)
p(1760)
p(1764)
p(1765)
p(1768)
p(1769)
p(1770)
p(1775)
p(1776)
p(1777)
p(1780)
p(1781)
p(1782)
p(1784)
p(1785)
p(1786)
p(1787)
p(1788)
p(1789)
p(1791)
p(1794)
p(1795)
p(1797)
p(1799)
p(1801)
p(1804)
p(1806)
p(1808)
p(1809)
p(1811)
p(1812)
p(1813)
p(1815)
p(1816)
p(1818)
p(1819)
p(1821)
p(1822)
p(1823)
p(1827)
p(1828)
p(1830)
p(1831)
p(1832)
p(1833)
p(1835)
p(1836)
p(1837)
p(1838)
p(1840)
p(1844)
p(1845)
p(1847)
p(1848)
p(1849)
p(1850)
p(1852)
p(1853)
p(1854)
p(1855)
p(1856)
p(1860)
p(1861)
p(1862)
p(1869)
p(1870)
p(1872)
p(1873)
p(1874)
p(1877)
p(1882)
p(1887)
p(1888)
p(1890)
p(1895)
p(1896)
p(1899)
p(1901)
p(1903)
p(1904)
p(1905)
p(1909)
p(1912)
p(1915)
p(1916)
p(1917)
p(1918)
p(1920)
p(1922)
p(1923)
p(1924)
p(1925)
p(1927)
p(1928)
p(1929)
p(1930)
p(1931)
p(1932)
p(1934)
p(1935)
p(1936)
p(1941)
p(1942)
p(1943)
p(1944)
p(1945)
p(1946)
p(1947)
p(1948)
p(1949)
p(1950)
p(1951)
p(1952)
p(1953)
p(1958)
p(1959)
p(1961)
p(1962)
p(1964)
p(1966)
p(1969)
p(1970)
p(1971)
p(1972)
p(1974)
p(1975)
p(1976)
p(1977)
p(1978)
p(1979)
p(1980)
p(1981)
p(1984)
p(1985)
p(1986)
p(1987)
p(1988)
p(1989)
p(1990)
p(1991)
p(1992)
p(1993)
p(1995)
p(1996)
p(1998)
p(2000)
p(2001)
p(2002)
p(2003)
p(2004)
p(2007)
p(2008)
p(2010)
p(2011)
p(2013)
p(2014)
p(2017)
p(2018)
p(2019)
p(2020)
p(2021)
p(2023)
p(2024)
p(2027)
p(2028)
p(2029)
p(2030)
p(2031)
p(2032)
p(2033)
p(2034)
p(2036)
p(2038)
p(2039)
p(2041)
p(2042)
p(2043)
p(2044)
p(2046)
p(2047)
p(2048)
p(2049)
p(2050)
p(2051)
p(2052)
p(2053)
p(2054)
p(2055)
p(2056)
p(2057)
p(2060)
p(2062)
p(2063)
p(2065)
p(2068)
p(2069)
p(2070)
p(2074)
p(2075)
p(2078)
p(2079)
p(2080)
p(2081)
p(2082)
p(2083)
p(2084)
p(2085)
p(2088)
p(2092)
p(2096)
p(2100)
p(2101)
p(2102)
p(2104)
p(2105)
p(2106)
p(2107)
p(2109)
p(2110)
p(2111)
p(2112)
p(2114)
p(2115)
p(2116)
p(2117)
p(2118)
p(2121)
p(2125)
p(2126)
p(2127)
p(2128)
p(2129)
p(2131)
p(2132)
p(2133)
p(2135)
p(2136)
p(2137)
p(2138)
p(2139)
p(2140)
p(2141)
p(2142)
p(2146)
p(2148)
p(2149)
p(2151)
p(2152)
p(2153)
p(2154)
p(2155)
p(2156)
p(2157)
p(2159)
p(2160)
p(2162)
p(2163)
p(2164)
p(2166)
p(2167)
p(2168)
p(2169)
p(2171)
p(2172)
p(2173)
p(2174)
p(2175)
p(2176)
p(2178)
p(2181)
p(2182)
p(2183)
p(2184)
p(2185)
p(2186)
p(2187)
p(2188)
p(2189)
p(2190)
p(2191)
p(2192)
p(2193)
p(2194)
p(2195)
p(2196)
p(2199)
p(2200)
p(2201)
p(2208)
p(2209)
p(2212)
p(2215)
p(2217)
p(2218)
p(2225)
p(2226)
p(2227)
p(2228)
p(2229)
p(2230)
p(2231)
p(2232)
p(2234)
p(2236)
p(2237)
p(2238)
p(2239)
p(2240)
p(2241)
p(2242)
p(2243)
p(2244)
p(2245)
p(2246)
p(2247)
p(2248)
p(2249)
p(2250)
p(2251)
p(2252)
p(2253)
p(2255)
p(2256)
p(2257)
p(2258)
p(2259)
p(2260)
p(2261)
p(2262)
p(2263)
p(2264)
p(2265)
p(2267)
p(2269)
p(2271)
p(2272)
p(2273)
p(2274)
p(2275)
p(2276)
p(2277)
p(2279)
p(2280)
p(2281)
p(2282)
p(2283)
p(2284)
p(2286)
p(2287)
p(2288)
p(2289)
p(2290)
p(2291)
p(2296)
p(2299)
p(2301)
p(2302)
p(2304)
p(2305)
p(2308)
p(2309)
p(2311)
p(2312)
p(2313)
p(2315)
p(2317)
p(2318)
p(2325)
p(2327)
p(2328)
p(2329)
p(2330)
p(2331)
p(2334)
p(2336)
p(2337)
p(2339)
p(2342)
p(2345)
p(2346)
p(2348)
p(2349)
p(2350)
p(2351)
p(2352)
p(2353)
p(2354)
p(2355)
p(2356)
p(2358)
p(2359)
p(2361)
p(2362)
p(2363)
p(2365)
p(2366)
p(2367)
p(2368)
p(2369)
p(2370)
p(2371)
p(2373)
p(2374)
p(2375)
p(2376)
p(2377)
p(2378)
p(2379)
p(2381)
p(2382)
p(2383)
p(2384)
p(2385)
p(2386)
p(2387)
p(2388)
p(2389)
p(2390)
p(2391)
p(2392)
p(2393)
p(2394)
p(2395)
p(2396)
p(2397)
p(2398)
p(2400)
p(2402)
p(2403)
p(2404)
p(2405)
p(2406)
p(2407)
p(2408)
p(2409)
p(2410)
p(2411)
p(2413)
p(2414)
p(2415)
p(2417)
p(2418)
p(2419)
p(2420)
p(2421)
p(2424)
p(2425)
p(2426)
p(2429)
p(2430)
p(2431)
p(2433)
p(2434)
p(2435)
p(2436)
p(2437)
p(2438)
p(2440)
p(2441)
p(2442)
p(2443)
p(2444)
p(2446)
p(2447)
p(2448)
p(2449)
p(2451)
p(2452)
p(2453)
p(2454)
p(2455)
p(2456)
p(2457)
p(2458)
p(2459)
p(2460)
p(2463)
p(2464)
p(2465)
p(2467)
p(2469)
p(2470)
p(2471)
p(2472)
p(2476)
p(2478)
p(2479)
p(2480)
p(2481)
p(2482)
p(2484)
p(2485)
p(2486)
p(2487)
p(2488)
p(2490)
p(2491)
p(2492)
p(2495)
p(2497)
p(2498)
p(2499)
p(2501)
p(2502)
p(2503)
p(2504)
p(2505)
p(2506)
p(2507)
p(2509)
p(2511)
p(2512)
p(2513)
p(2514)
p(2515)
p(2516)
p(2521)
p(2524)
p(2525)
p(2526)
p(2527)
p(2528)
p(2529)
p(2530)
p(2531)
p(2533)
p(2535)
p(2536)
p(2537)
p(2538)
p(2540)
p(2541)
p(2545)
p(2546)
p(2547)
p(2549)
p(2551)
p(2553)
p(2555)
p(2556)
p(2558)
p(2559)
p(2560)
p(2562)
p(2564)
p(2565)
p(2566)
p(2567)
p(2568)
p(2569)
p(2570)
p(2572)
p(2573)
p(2575)
p(2576)
p(2578)
p(2579)
p(2583)
p(2584)
p(2585)
p(2586)
p(2588)
p(2590)
p(2591)
p(2593)
p(2594)
p(2595)
p(2598)
p(2599)
p(2601)
p(2602)
p(2603)
p(2605)
p(2606)
p(2607)
p(2608)
p(2609)
p(2612)
p(2613)
p(2615)
p(2619)
p(2620)
p(2623)
p(2624)
p(2625)
p(2626)
p(2627)
p(2628)
p(2629)
p(2631)
p(2632)
p(2635)
p(2636)
p(2637)
p(2638)
p(2639)
p(2640)
p(2641)
p(2642)
p(2643)
p(2645)
p(2646)
p(2647)
p(2649)
p(2653)
p(2654)
p(2656)
p(2657)
p(2659)
p(2661)
p(2662)
p(2663)
p(2664)
p(2665)
p(2672)
p(2673)
p(2674)
p(2675)
p(2676)
p(2677)
p(2679)
p(2680)
p(2681)
p(2685)
p(2686)
p(2688)
p(2689)
p(2691)
p(2692)
p(2693)
p(2694)
p(2695)
p(2696)
p(2697)
p(2698)
p(2699)
p(2701)
p(2703)
p(2704)
p(2705)
p(2706)
p(2707)
p(2709)
p(2710)
p(2711)
p(2712)
p(2713)
p(2714)
p(2715)
p(2718)
p(2719)
p(2720)
p(2722)
p(2723)
p(2724)
p(2726)
p(2728)
p(2729)
p(2734)
p(2737)
p(2738)
p(2739)
p(2740)
p(2741)
p(2744)
p(2749)
p(2750)
p(2751)
p(2752)
p(2754)
p(2756)
p(2758)
p(2760)
p(2761)
p(2762)
p(2763)
p(2764)
p(2765)
p(2766)
p(2767)
p(2768)
p(2769)
p(2771)
p(2772)
p(2773)
p(2774)
p(2777)
p(2778)
p(2780)
p(2782)
p(2784)
p(2785)
p(2786)
p(2789)
p(2790)
p(2792)
p(2793)
p(2794)
p(2795)
p(2796)
p(2799)
p(2800)
p(2804)
p(2805)
p(2808)
p(2817)
p(2818)
p(2821)
p(2822)
p(2823)
p(2825)
p(2826)
p(2828)
p(2831)
p(2832)
p(2833)
p(2836)
p(2837)
p(2838)
p(2840)
p(2841)
p(2845)
p(2846)
p(2847)
p(2850)
p(2853)
p(2855)
p(2856)
p(2857)
p(2860)
p(2862)
p(2864)
p(2866)
p(2867)
p(2868)
p(2870)
p(2871)
p(2876)
p(2882)
p(2883)
p(2886)
p(2887)
p(2888)
p(2891)
p(2892)
p(2893)
p(2894)
p(2895)
p(2903)
p(2904)
p(2907)
p(2908)
p(2909)
p(2912)
p(2914)
p(2917)
p(2918)
p(2922)
p(2923)
p(2924)
p(2926)
p(2928)
p(2931)
p(2932)
p(2934)
p(2935)
p(2937)
p(2938)
p(2939)
p(2940)
p(2941)
p(2942)
p(2943)
p(2944)
p(2945)
p(2946)
p(2947)
p(2948)
p(2949)
p(2951)
p(2952)
p(2954)
p(2955)
p(2956)
p(2959)
p(2960)
p(2961)
p(2964)
p(2965)
p(2966)
p(2970)
p(2974)
p(2975)
p(2976)
p(2978)
p(2983)
p(2985)
p(2986)
p(2987)
p(2989)
p(2991)
p(2992)
p(2993)
p(2996)
p(3003)
p(3004)
p(3006)
p(3007)
p(3009)
p(3012)
p(3013)
p(3014)
p(3016)
p(3017)
p(3018)
p(3020)
p(3021)
p(3026)
p(3030)
p(3032)
p(3034)
p(3036)
p(3037)
p(3038)
p(3039)
p(3040)
p(3041)
p(3042)
p(3044)
p(3045)
p(3046)
p(3047)
p(3048)
p(3049)
p(3050)
p(3051)
p(3055)
p(3056)
p(3057)
p(3061)
p(3062)
p(3066)
p(3067)
p(3068)
p(3069)
p(3070)
p(3071)
p(3072)
p(3073)
p(3074)
p(3075)
p(3076)
p(3077)
p(3078)
p(3080)
p(3083)
p(3084)
p(3085)
p(3086)
p(3087)
p(3088)
p(3090)
p(3091)
p(3092)
p(3093)
p(3094)
p(3095)
p(3096)
p(3098)
p(3099)
p(3100)
p(3101)
p(3103)
p(3104)
p(3106)
p(3107)
p(3109)
p(3110)
p(3111)
p(3112)
p(3114)
p(3115)
p(3117)
p(3121)
p(3122)
p(3123)
p(3125)
p(3126)
p(3128)
p(3129)
p(3130)
p(3131)
p(3132)
p(3133)
p(3134)
p(3138)
p(3139)
p(3140)
p(3141)
p(3142)
p(3145)
p(3146)
p(3148)
p(3149)
p(3150)
p(3154)
p(3155)
p(3156)
p(3157)
p(3158)
p(3159)
p(3160)
p(3162)
p(3164)
p(3167)
p(3168)
p(3169)
p(3170)
p(3171)
p(3172)
p(3173)
p(3174)
p(3175)
p(3176)
p(3177)
p(3179)
p(3180)
p(3181)
p(3182)
p(3183)
p(3185)
p(3186)
p(3187)
p(3189)
p(3190)
p(3191)
p(3192)
p(3193)
p(3194)
p(3195)
p(3196)
p(3199)
p(3204)
p(3207)
p(3208)
p(3210)
p(3211)
p(3213)
p(3214)
p(3215)
p(3216)
p(3218)
p(3219)
p(3221)
p(3224)
p(3225)
p(3226)
p(3227)
p(3228)
p(3229)
p(3230)
p(3233)
p(3237)
p(3239)
p(3241)
p(3242)
p(3243)
p(3244)
p(3245)
p(3246)
p(3249)
p(3250)
p(3251)
p(3252)
p(3253)
p(3254)
p(3255)
p(3256)
p(3257)
p(3258)
p(3259)
p(3260)
p(3261)
p(3262)
p(3263)
p(3264)
p(3265)
p(3266)
p(3267)
p(3268)
p(3269)
p(3270)
p(3271)
p(3272)
p(3273)
p(3274)
p(3275)
p(3276)
p(3277)
p(3278)
p(3279)
p(3280)
p(3281)
p(3282)
p(3283)
p(3285)
p(3286)
p(3287)
p(3290)
p(3292)
p(3293)
p(3294)
p(3295)
p(3296)
p(3297)
p(3298)
p(3299)
p(3301)
p(3302)
p(3304)
p(3308)
p(3310)
p(3311)
p(3312)
p(3314)
p(3316)
p(3317)
p(3318)
p(3320)
p(3321)
p(3322)
p(3325)
p(3328)
p(3331)
p(3332)
p(3333)
p(3334)
p(3335)
p(3336)
p(3337)
p(3338)
p(3340)
p(3342)
p(3343)
p(3344)
p(3345)
p(3346)
p(3347)
p(3348)
p(3349)
p(3351)
p(3352)
p(3353)
p(3356)
p(3357)
p(3358)
p(3359)
p(3360)
p(3361)
p(3363)
p(3364)
p(3366)
p(3367)
p(3368)
p(3370)
p(3371)
p(3372)
p(3373)
p(3375)
p(3376)
p(3377)
p(3378)
p(3379)
p(3380)
p(3382)
p(3384)
p(3385)
p(3386)
p(3387)
p(3388)
p(3389)
p(3390)
p(3393)
p(3397)
p(3398)
p(3399)
p(3400)
p(3406)
p(3408)
p(3409)
p(3411)
p(3414)
p(3415)
p(3416)
p(3417)
p(3419)
p(3420)
p(3421)
p(3422)
p(3423)
p(3427)
p(3428)
p(3429)
p(3432)
p(3435)
p(3436)
p(3437)
p(3438)
p(3439)
p(3440)
p(3445)
p(3449)
p(3450)
p(3456)
p(3458)
p(3459)
p(3460)
p(3461)
p(3462)
p(3463)
p(3465)
p(3467)
p(3468)
p(3469)
p(3470)
p(3471)
p(3472)
p(3475)
p(3476)
p(3480)
p(3481)
p(3483)
p(3484)
p(3485)
p(3486)
p(3487)
p(3488)
p(3489)
p(3491)
p(3492)
p(3494)
p(3497)
p(3498)
p(3499)
p(3501)
p(3503)
p(3504)
p(3505)
p(3506)
p(3507)
p(3508)
p(3509)
p(3510)
p(3511)
p(3512)
p(3513)
p(3516)
p(3517)
p(3518)
p(3519)
p(3521)
p(3522)
p(3523)
p(3524)
p(3525)
p(3526)
p(3528)
p(3532)
p(3533)
p(3534)
p(3536)
p(3537)
p(3538)
p(3539)
p(3543)
p(3544)
p(3548)
p(3550)
p(3553)
p(3554)
p(3557)
p(3561)
p(3565)
p(3566)
p(3573)
p(3576)
p(3579)
p(3580)
p(3581)
p(3585)
p(3587)
p(3588)
p(3589)
p(3590)
p(3592)
p(3593)
p(3594)
p(3597)
p(3598)
p(3599)
p(3600)
p(3601)
p(3602)
p(3604)
p(3605)
p(3608)
p(3609)
p(3612)
p(3613)
p(3614)
p(3615)
p(3616)
p(3617)
p(3618)
p(3619)
p(3620)
p(3621)
p(3622)
p(3623)
p(3624)
p(3625)
p(3626)
p(3627)
p(3628)
p(3629)
p(3630)
p(3632)
p(3633)
p(3635)
p(3636)
p(3637)
p(3638)
p(3640)
p(3641)
p(3643)
p(3646)
p(3647)
p(3648)
p(3649)
p(3650)
p(3652)
p(3653)
p(3657)
p(3658)
p(3659)
p(3660)
p(3661)
p(3662)
p(3663)
p(3664)
p(3665)
p(3666)
p(3667)
p(3668)
p(3669)
p(3670)
p(3671)
p(3672)
p(3673)
p(3675)
p(3678)
p(3680)
p(3681)
p(3682)
p(3683)
p(3684)
p(3685)
p(3686)
p(3687)
p(3688)
p(3690)
p(3691)
p(3692)
p(3693)
p(3694)
p(3695)
p(3696)
p(3697)
p(3699)
p(3700)
p(3701)
p(3705)
p(3708)
p(3709)
p(3710)
p(3711)
p(3713)
p(3714)
p(3715)
p(3716)
p(3717)
p(3718)
p(3719)
p(3720)
p(3721)
p(3723)
p(3724)
p(3725)
p(3728)
p(3729)
p(3731)
p(3732)
p(3734)
p(3735)
p(3736)
p(3737)
p(3739)
p(3740)
p(3741)
p(3742)
p(3743)
p(3744)
p(3746)
p(3747)
p(3748)
p(3749)
p(3750)
p(3751)
p(3752)
p(3753)
p(3756)
p(3757)
p(3759)
p(3760)
p(3761)
p(3762)
p(3763)
p(3764)
p(3765)
p(3766)
p(3767)
p(3768)
p(3771)
p(3772)
p(3773)
p(3774)
p(3775)
p(3776)
p(3777)
p(3778)
p(3779)
p(3781)
p(3782)
p(3783)
p(3784)
p(3785)
p(3786)
p(3787)
p(3788)
p(3789)
p(3790)
p(3797)
p(3800)
p(3801)
p(3802)
p(3805)
p(3808)
p(3809)
p(3812)
p(3813)
p(3814)
p(3815)
p(3817)
p(3820)
p(3824)
p(3831)
p(3835)
p(3836)
p(3842)
p(3843)
p(3844)
p(3845)
p(3846)
p(3847)
p(3849)
p(3850)
p(3852)
p(3853)
p(3854)
p(3855)
p(3856)
p(3858)
p(3859)
p(3860)
p(3861)
p(3862)
p(3863)
p(3865)
p(3867)
p(3869)
p(3870)
p(3873)
p(3874)
p(3876)
p(3878)
p(3882)
p(3883)
p(3886)
p(3887)
p(3889)
p(3893)
p(3894)
p(3895)
p(3896)
p(3897)
p(3898)
p(3899)
p(3900)
p(3902)
p(3903)
p(3904)
p(3905)
p(3906)
p(3907)
p(3908)
p(3910)
p(3911)
p(3913)
p(3916)
p(3917)
p(3921)
p(3922)
p(3923)
p(3925)
p(3926)
p(3927)
p(3928)
p(3934)
p(3941)
p(3943)
p(3944)
p(3954)
p(3959)
p(3960)
p(3962)
p(3963)
p(3964)
p(3967)
p(3968)
p(3969)
p(3970)
p(3971)
p(3972)
p(3973)
p(3974)
p(3975)
p(3976)
p(3977)
p(3978)
p(3979)
p(3980)
p(3981)
p(3982)
p(3983)
p(3984)
p(3985)
p(3986)
p(3987)
p(3989)
p(3990)
p(3991)
p(3992)
p(3993)
p(3994)
p(3996)
p(3997)
p(3998)
p(4000)
p(4001)
p(4002)
p(4003)
p(4006)
p(4007)
p(4008)
p(4010)
p(4011)
p(4012)
p(4014)
p(4016)
p(4018)
p(4019)
p(4020)
p(4021)
p(4022)
p(4023)
p(4025)
p(4026)
p(4028)
p(4041)
p(4044)
p(4045)
p(4046)
p(4047)
p(4048)
p(4049)
p(4050)
p(4052)
</script>
</td></tr>
<tr><td width=15% align=left>Submissions:</td>
<td align=center width=25%><a href=status?user_id=vjudge5>277562</a></td></tr>
<tr><td width=15% align=left>School:</td>
<td align=center width=25%> </td></tr>
<tr><td width=15% align=left>Email:</td>
<td align=center width=25%> </td></tr>
</table>
<p><img height=30 src=images/home.gif width=40 border=0><font size=3><a href=.>Home Page</a> </font>&nbsp;&nbsp;<img height=30 src='images/goback.gif' width=40 border=0><font size=3><a href='javascript:history.go(-1)'>Go Back</a>&nbsp;&nbsp;<img height=30 width=40 border=0 src='images/top.gif'><a href=#top>To top</a></font><br><hr><P align=center style='font-family:Arial, Helvetica, sans-serif'>All Rights Reserved 2003-2013 Ying Fuchen,Xu Pengcheng,Xie Di<br>Any problem, Please <a href=mailto:webmaster@poj.org>Contact Administrator</a></p><script type="text/javascript" src="http://tajs.qq.com/stats?sId=66192298" charset="UTF-8"></script></body></html>`