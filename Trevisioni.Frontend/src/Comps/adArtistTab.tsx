import React from 'react';
import { Grid } from '@material-ui/core';
import styles from './styles';

function ArtistTab() {

    var mockedArtists=[
        {"Id":"H9d1fp755lqAnyt4ut1","ArtistId":"Q7v63958FsiPjsz9f67","Name":"Aleece","Type":3,"Genre":1,"Subgenre":"Ara chloroptera","PhoneNumber":"9821319830","Email":"amarsden0@theglobeandmail.com","Bio":"Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.","Events":[]},
        {"Id":"01m47Y78awwFnnb4t81","ArtistId":"y6x5en31OkhIkco6au6","Name":"Way","Type":3,"Genre":12,"Subgenre":"Bubo virginianus","PhoneNumber":"8974384391","Email":"wcotterel1@plala.or.jp","Bio":"Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.","Events":[{"Id":"z7c9b069EkhRpjr9lq8","StartTime":"2021-09-03T11:58:37Z","EndTime":"2021-09-03T20:06:10Z","ActivityName":"Ramalinaceae"},{"Id":"X0n1xv91qlzFwew0c99","StartTime":"2021-09-03T10:34:04Z","EndTime":"2021-09-03T04:08:11Z","ActivityName":"Potamogetonaceae"}]},
        {"Id":"w5i2f932eto84wk5f97","ArtistId":"V7t5jo77rbm4c3f1dp1","Name":"Karine","Type":3,"Genre":5,"Subgenre":"Zosterops pallidus","PhoneNumber":"7823346833","Email":"kloynes2@google.com.br","Bio":"In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.","Events":[{"Id":"01l1y349mla7elf2kz0","StartTime":"2021-09-03T19:12:09Z","EndTime":"2021-09-03T18:40:49Z","ActivityName":"Cupressaceae"},{"Id":"F1x35U80QxeFhaw0vg4","StartTime":"2021-09-03T02:49:25Z","EndTime":"2021-09-03T21:48:34Z","ActivityName":"Sapotaceae"}]},
        {"Id":"m6n71q11efrAhgq1c21","ArtistId":"I9a5ws12EfyQpzz8mv1","Name":"Margaux","Type":3,"Genre":12,"Subgenre":"Theropithecus gelada","PhoneNumber":"4675632957","Email":"mheineke3@irs.gov","Bio":"Sed ante. Vivamus tortor. Duis mattis egestas metus.","Events":[{"Id":"20p9tS952apZcpu0mf7","StartTime":"2021-09-03T05:10:13Z","EndTime":"2021-09-03T03:34:24Z","ActivityName":"Oxalidaceae"}]},
        {"Id":"u5m49g31yxsTaap4rf5","ArtistId":"m5v0wD00vkgZynl8xu1","Name":"Delinda","Type":3,"Genre":4,"Subgenre":"Paraxerus cepapi","PhoneNumber":"2329549939","Email":"dkingzett4@jimdo.com","Bio":"Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.","Events":[]},
        {"Id":"h3m7it43muiH0yf1ga6","ArtistId":"M2s1gA57XqaWx0k7nq1","Name":"Waylan","Type":3,"Genre":3,"Subgenre":"Anitibyx armatus","PhoneNumber":"7152222176","Email":"wredmell5@cloudflare.com","Bio":"Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.","Events":[]},
        {"Id":"S2a3xa62MziDbwq4il2","ArtistId":"o3e1ru780pe0e4l3jn1","Name":"Caroline","Type":3,"Genre":2,"Subgenre":"Priodontes maximus","PhoneNumber":"4001925354","Email":"cmcandrew6@123-reg.co.uk","Bio":"In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.","Events":[{"Id":"B4i36A93Mru44ch4bt5","StartTime":"2021-09-04T08:40:33Z","EndTime":"2021-09-04T01:58:22Z","ActivityName":"Lamiaceae"},{"Id":"H5o1pK25AjjVkqq1ve6","StartTime":"2021-09-04T07:33:00Z","EndTime":"2021-09-04T23:16:57Z","ActivityName":"Liliaceae"}]},
        {"Id":"C3f29004ZpqYwbi8mf1","ArtistId":"e5p15010nnlAlzc2nk2","Name":"Gabbey","Type":3,"Genre":7,"Subgenre":"Varanus sp.","PhoneNumber":"7707509126","Email":"glenoir7@t-online.de","Bio":"Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.","Events":[{"Id":"20v5oi44wqbIctl1ip7","StartTime":"2021-09-04T06:01:30Z","EndTime":"2021-09-04T09:45:50Z","ActivityName":"Caryophyllaceae"},{"Id":"16r0yv00Rjo60fr6kj0","StartTime":"2021-09-04T00:45:08Z","EndTime":"2021-09-04T15:16:00Z","ActivityName":"Verrucariaceae"}]},
        {"Id":"C3e58177dosOuyh7c83","ArtistId":"L4q7v6553jgZ3op9gf7","Name":"Murray","Type":3,"Genre":1,"Subgenre":"Martes americana","PhoneNumber":"4348904883","Email":"mbenedyktowicz8@mlb.com","Bio":"Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.","Events":[{"Id":"H6j1kZ88xstWjeg4cl9","StartTime":"2021-09-04T12:52:28Z","EndTime":"2021-09-04T04:39:22Z","ActivityName":"Poaceae"}]},
        {"Id":"T8v57U704rqGxrg7vc2","ArtistId":"q1d91l45NpaNe4l0k75","Name":"Teena","Type":3,"Genre":11,"Subgenre":"Chordeiles minor","PhoneNumber":"5449580239","Email":"thegge9@e-recht24.de","Bio":"Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.","Events":[]},
        {"Id":"u0c6vF05kczRkej1t87","ArtistId":"94z3uB01rtkQ2gf5wg6","Name":"Hobard","Type":3,"Genre":12,"Subgenre":"Nectarinia chalybea","PhoneNumber":"5777213919","Email":"hpetruka@mapquest.com","Bio":"Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.","Events":[{"Id":"b4i2iK84VezRgqg6yw8","StartTime":"2021-09-05T00:02:11Z","EndTime":"2021-09-05T15:37:40Z","ActivityName":"Elatinaceae"},{"Id":"33d29n96Zpp5nla9e69","StartTime":"2021-09-05T13:45:52Z","EndTime":"2021-09-05T05:15:47Z","ActivityName":"Grossulariaceae"}]},
        {"Id":"G4k9l353uol4hmm1m39","ArtistId":"d0h0hH08mncKyah6ey7","Name":"Elaina","Type":3,"Genre":6,"Subgenre":"Aegypius occipitalis","PhoneNumber":"4123209313","Email":"egoadbieb@github.io","Bio":"Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.","Events":[{"Id":"e5c93V10EtgRfdi9bc6","StartTime":"2021-09-05T00:19:13Z","EndTime":"2021-09-05T11:18:44Z","ActivityName":"Fabaceae"}]},
        {"Id":"50t9oh38VhkYt7o9bi8","ArtistId":"h1j5mK69QfmYfov8ei0","Name":"Theo","Type":3,"Genre":3,"Subgenre":"Papio ursinus","PhoneNumber":"5103590443","Email":"tblabeyc@nytimes.com","Bio":"Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.","Events":[{"Id":"66p57x77vnvV1nw3fp3","StartTime":"2021-09-05T13:28:16Z","EndTime":"2021-09-05T14:25:04Z","ActivityName":"Hymeneliaceae"},{"Id":"Y5s56j35dzqHfsr6r41","StartTime":"2021-09-05T11:17:39Z","EndTime":"2021-09-05T02:51:32Z","ActivityName":"Fabaceae"}]},
        {"Id":"C1n12v63pyuKm1r2k29","ArtistId":"85l4nI19nxmOqdh2ye5","Name":"Bruce","Type":3,"Genre":8,"Subgenre":"Ateles paniscus","PhoneNumber":"5991487511","Email":"bbrammalld@nymag.com","Bio":"Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.","Events":[{"Id":"R2r73469GgoC6km0rm4","StartTime":"2021-09-05T07:37:25Z","EndTime":"2021-09-05T11:26:06Z","ActivityName":"Polemoniaceae"}]},
        {"Id":"78c3fR83bklMczg4vl3","ArtistId":"g7m6vu91wwrVflp8t16","Name":"Currie","Type":3,"Genre":10,"Subgenre":"Crotalus cerastes","PhoneNumber":"2464653713","Email":"ckingse@slate.com","Bio":"Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.","Events":[{"Id":"y4j18f74Pui52af7mb6","StartTime":"2021-09-05T21:43:51Z","EndTime":"2021-09-05T11:14:17Z","ActivityName":"Brassicaceae"},{"Id":"U9o4mt31uftZs8b7x98","StartTime":"2021-09-05T06:02:32Z","EndTime":"2021-09-05T21:20:47Z","ActivityName":"Sterculiaceae"}]},
        {"Id":"h8c9f776mnfWnrp1zf7","ArtistId":"o7z1dp59lscGzot1gb4","Name":"Basile","Type":3,"Genre":10,"Subgenre":"Anthropoides paradisea","PhoneNumber":"7665635662","Email":"bcobsonf@foxnews.com","Bio":"Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.","Events":[{"Id":"42t6eV53lwdEu6d2oc8","StartTime":"2021-09-05T21:25:04Z","EndTime":"2021-09-05T04:26:09Z","ActivityName":"Lamiaceae"},{"Id":"D5p24s08ojmL1to0io2","StartTime":"2021-09-05T21:52:08Z","EndTime":"2021-09-05T04:15:28Z","ActivityName":"Iridaceae"}]},
        {"Id":"10h29y42gxy99hf5l21","ArtistId":"G4u24v98pcp3ihn5w04","Name":"Gaynor","Type":3,"Genre":3,"Subgenre":"Sarkidornis melanotos","PhoneNumber":"8697571443","Email":"gmingaudg@gnu.org","Bio":"Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.","Events":[{"Id":"v4s39H80Hvf2e1d1pk7","StartTime":"2021-09-05T19:05:50Z","EndTime":"2021-09-05T21:43:18Z","ActivityName":"Fabaceae"}]},
        {"Id":"65g24K86KyqHlue4sh0","ArtistId":"R4y34c318ynAvax7gs9","Name":"Oralia","Type":3,"Genre":8,"Subgenre":"Rhea americana","PhoneNumber":"5313823269","Email":"onandh@rambler.ru","Bio":"Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.","Events":[{"Id":"X6n8vp21Twq4ehy8vc2","StartTime":"2021-09-03T09:20:48Z","EndTime":"2021-09-03T15:16:17Z","ActivityName":"Fagaceae"},{"Id":"m2u6b152AulPh6k0mt4","StartTime":"2021-09-03T01:57:12Z","EndTime":"2021-09-03T20:35:49Z","ActivityName":"Grossulariaceae"}]},
        {"Id":"k7g7sC13oqdW2ei4gk2","ArtistId":"Z9u7le25jpmX30n6ke3","Name":"Lynne","Type":3,"Genre":9,"Subgenre":"Cervus elaphus","PhoneNumber":"9134693821","Email":"lsuttilli@princeton.edu","Bio":"Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.","Events":[{"Id":"L2i2lv26Vfh32gg7kl1","StartTime":"2021-09-04T05:48:07Z","EndTime":"2021-09-04T08:34:10Z","ActivityName":"Poaceae"}]},
        {"Id":"08s6eW37ZqmKqre0ie6","ArtistId":"H2v95a07EyzA5tj9ol4","Name":"Vallie","Type":3,"Genre":12,"Subgenre":"Loxodonta africana","PhoneNumber":"9343043288","Email":"vbickerstassej@com.com","Bio":"Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.","Events":[{"Id":"U6f5wF267lx8x6b0io2","StartTime":"2021-09-04T02:08:38Z","EndTime":"2021-09-04T01:27:53Z","ActivityName":"Lamiaceae"},{"Id":"q1v4t917cmtSujk0w06","StartTime":"2021-09-04T23:54:20Z","EndTime":"2021-09-04T12:49:32Z","ActivityName":"Juncaceae"}]},
        {"Id":"M8e7zz45LdyLw6l1ah8","ArtistId":"58m55z10ueiRs5l7ih2","Name":"Barbra","Type":3,"Genre":2,"Subgenre":"Eutamias minimus","PhoneNumber":"9755781990","Email":"bdilworthk@mac.com","Bio":"Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.","Events":[{"Id":"20c3bJ51uqaUblq6rv5","StartTime":"2021-09-04T08:36:11Z","EndTime":"2021-09-04T23:01:53Z","ActivityName":"Asteraceae"}]},
        {"Id":"v3m3cx39iuoUpgd8bz2","ArtistId":"U8y83a54Rgo0cbw9d24","Name":"Coop","Type":3,"Genre":2,"Subgenre":"Ovis dalli stonei","PhoneNumber":"6089927465","Email":"cdullingl@disqus.com","Bio":"Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.","Events":[{"Id":"x5j1tD71JilVmxq9uk8","StartTime":"2021-09-04T04:33:50Z","EndTime":"2021-09-04T01:46:20Z","ActivityName":"Rubiaceae"}]},
        {"Id":"h9b6a389ohd2a8q9vr0","ArtistId":"N5e8hH069rhR00v5i84","Name":"Annabela","Type":3,"Genre":10,"Subgenre":"Cacatua galerita","PhoneNumber":"2306662076","Email":"avanderveldtm@cdc.gov","Bio":"In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.","Events":[{"Id":"W4s9yf17aknL3tq6p66","StartTime":"2021-09-04T05:59:00Z","EndTime":"2021-09-04T03:22:23Z","ActivityName":"Polemoniaceae"}]},
        {"Id":"v7m1tn30jylAwgw3tn4","ArtistId":"y6n4sE72Qqw8mds3a22","Name":"Hansiain","Type":3,"Genre":6,"Subgenre":"Macropus eugenii","PhoneNumber":"2878173232","Email":"hhindhaughn@shop-pro.jp","Bio":"Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.","Events":[{"Id":"Q0n0eo34oba53zu5jc1","StartTime":"2021-09-04T02:37:31Z","EndTime":"2021-09-04T13:43:31Z","ActivityName":"Hydrophyllaceae"}]},
        {"Id":"E7w1t073begLdvq5xb2","ArtistId":"I7c8wo92mpuAnjz1xp3","Name":"Amalita","Type":3,"Genre":10,"Subgenre":"Ara ararauna","PhoneNumber":"6797497851","Email":"aleveo@printfriendly.com","Bio":"Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.","Events":[{"Id":"m0z4oo94vqcC45v3ve3","StartTime":"2021-09-04T23:54:57Z","EndTime":"2021-09-04T00:08:09Z","ActivityName":"Brassicaceae"}]},
        {"Id":"i4g37D34zmn22kw4he5","ArtistId":"42m1z532Hyp4a0z7uk7","Name":"Ainslie","Type":3,"Genre":9,"Subgenre":"Streptopelia decipiens","PhoneNumber":"6539651588","Email":"avanhesterenp@google.com.au","Bio":"Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.","Events":[]},
        {"Id":"y4w6wb29Aha2j1g7ao7","ArtistId":"99w35V755mzP50k1t87","Name":"Cathlene","Type":3,"Genre":9,"Subgenre":"Semnopithecus entellus","PhoneNumber":"3933116656","Email":"clillegardq@squidoo.com","Bio":"Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.","Events":[]},
        {"Id":"u9x5v164Awx6y8e0wl9","ArtistId":"05b5u619RppVg0e4hp6","Name":"Chad","Type":3,"Genre":2,"Subgenre":"Felis yagouaroundi","PhoneNumber":"6455460727","Email":"ccamelinr@ca.gov","Bio":"Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.","Events":[{"Id":"F6n7ux16ssvXx9v1f14","StartTime":"2021-09-05T03:51:38Z","EndTime":"2021-09-05T06:51:41Z","ActivityName":"Ectolechiaceae"}]},
        {"Id":"75q8dG10qiaEpww1lf1","ArtistId":"R0b8aK14Osd2yzr6r12","Name":"Shandra","Type":3,"Genre":7,"Subgenre":"Tachyglossus aculeatus","PhoneNumber":"3239531051","Email":"shackleys@rediff.com","Bio":"Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.","Events":[{"Id":"B7q0pg97khgGtsu6mw4","StartTime":"2021-09-05T09:14:05Z","EndTime":"2021-09-05T11:23:56Z","ActivityName":"Urticaceae"}]},
        {"Id":"R9e8wD97QyhMonl9ze3","ArtistId":"73u75Y82OvdCm5z6hp5","Name":"Doreen","Type":3,"Genre":6,"Subgenre":"Chlidonias leucopterus","PhoneNumber":"1635033560","Email":"drogersont@dailymotion.com","Bio":"Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.","Events":[{"Id":"m9e9b171UvtYt9r0ul7","StartTime":"2021-09-05T00:31:38Z","EndTime":"2021-09-05T17:33:34Z","ActivityName":"Lamiaceae"},{"Id":"a7z9eU604qsRwuw4ko7","StartTime":"2021-09-05T18:37:52Z","EndTime":"2021-09-05T09:29:18Z","ActivityName":"Pittosporaceae"}]},
        {"Id":"C3l34e087sv3dmk0s32","ArtistId":"85s1cu360giWwiu8rf9","Name":"Isidore","Type":3,"Genre":3,"Subgenre":"Zenaida asiatica","PhoneNumber":"6851120492","Email":"itabramu@amazonaws.com","Bio":"Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.","Events":[{"Id":"89p9y265PrwBz1r4rw4","StartTime":"2021-09-05T02:47:04Z","EndTime":"2021-09-05T08:13:25Z","ActivityName":"Asteraceae"}]},
        {"Id":"04y3iY37hghIwse1uy6","ArtistId":"n2b9ak93WeqY3ak4lm6","Name":"Aloise","Type":3,"Genre":4,"Subgenre":"Hymenolaimus malacorhynchus","PhoneNumber":"5386301509","Email":"aforestallv@purevolume.com","Bio":"In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.","Events":[]},
        {"Id":"k4q3jF47MowLi1b9do6","ArtistId":"30l9cF491sqY4qp7ca3","Name":"Bamby","Type":3,"Genre":2,"Subgenre":"Ramphastos tucanus","PhoneNumber":"6441157202","Email":"bdancerw@devhub.com","Bio":"Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.","Events":[{"Id":"z0m2gz65HkiNynz3z48","StartTime":"2021-09-05T08:49:39Z","EndTime":"2021-09-05T09:13:35Z","ActivityName":"Polemoniaceae"},{"Id":"y9r1zg359diWreu2qh7","StartTime":"2021-09-05T09:58:35Z","EndTime":"2021-09-05T03:12:18Z","ActivityName":"Clusiaceae"}]},
        {"Id":"u9v7eA98bgfC37s9wq6","ArtistId":"x6n1jx95HvzZqwk5m57","Name":"Orion","Type":3,"Genre":12,"Subgenre":"Ciconia episcopus","PhoneNumber":"9546847231","Email":"odullardx@usgs.gov","Bio":"Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.","Events":[{"Id":"f9v3yu31uosVuxo7nb4","StartTime":"2021-09-05T13:17:00Z","EndTime":"2021-09-05T23:29:55Z","ActivityName":"Pinaceae"},{"Id":"A0a13c36Uge4bvf8us9","StartTime":"2021-09-05T12:51:03Z","EndTime":"2021-09-05T08:59:29Z","ActivityName":"Asteraceae"}]},
        {"Id":"D0b5rz91XjaIuqz2m06","ArtistId":"K9k6mY36nne93yl6h42","Name":"Allyn","Type":3,"Genre":3,"Subgenre":"Litrocranius walleri","PhoneNumber":"4159282746","Email":"aflecknoey@purevolume.com","Bio":"Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.","Events":[{"Id":"o8a7fa26rlmUq8j0pd3","StartTime":"2021-09-05T18:46:15Z","EndTime":"2021-09-05T05:02:28Z","ActivityName":"Orchidaceae"}]}
    ];

    var firstDay=new Date(2021,8,3);    //todo should be dynamic 
    var lastDay=new Date(2021,8,5);     //todo should be dynamic
    var eventLenght = Math.ceil(Math.abs(lastDay.getTime() - firstDay.getTime()) / (1000 * 3600 * 24)); 

    const rows : JSX.Element[] = [];
    for (let hour = 16; hour <= 25; hour++) {
        
        var cells : JSX.Element[] = [];
            //warning posible performances bolleneck
            for (let day =0; day <= eventLenght; day++) {
                var date = new Date(firstDay);
                date.setDate(date.getDate() + day);
                date.setHours(hour,30);
                var data = mockedArtists.filter(x=>
                    x.Events.filter(x=>new Date(x.StartTime)<date&&date<new Date(x.EndTime)).length>0)
                    .map(x=>x.Name)
                    .join(' ');
                // "Events":[{"Id":"z0m2gz65HkiNynz3z48","StartTime":"2021-09-03T08:49:39Z","EndTime":"2021-09-03T09:13:35Z","ActivityName":"Polemoniaceae"},{"Id":"y9r1zg359diWreu2qh7","StartTime":"2021-09-03T09:58:35Z","EndTime":"2021-09-03T03:12:18Z","ActivityName":"Clusiaceae"}
                cells.push(<td style={{border: '1px solid', borderColor: 'lightgray', padding: '6,4,6,4' }}>{data}</td>)
            }
        if(!cells)
            return;

        var row: JSX.Element =(
            <tr style={{border: '1px solid', borderColor: 'lightgray'}}>
                {cells}
            </tr>
        );
        rows.push(row);
    }

    return (
        <table style={{border: '1px solid', borderCollapse: 'collapse', borderColor: 'lightgray'}}>
            {rows}
        </table>
    )
}

export default ArtistTab;