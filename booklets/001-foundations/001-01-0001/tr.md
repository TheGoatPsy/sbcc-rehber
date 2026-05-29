---
title_en: "What is Claude Code? A Social Scientist's Perspective"
title_tr: "Claude Code Nedir? Sosyal Bilimci Bakışıyla"
booklet_id: "001-01-0001"
category: "001-foundations"
language: "tr"
version: "0.1.0"
date_published: "2026-05-19"
date_last_revised: "2026-05-19"
authors:
  - name: "Onour Impram"
    orcid: "0000-0003-1076-3928"
    role: "author, principal reviewer"
ai_assisted: true
ai_tools:
  - name: "Claude Code"
    vendor: "Anthropic"
    model_alias: "claude-opus-4-7"
    model_dated: null  # no dated identifier published by Anthropic for Opus 4.7 as of 2026-05-19
    role: "drafting, verification, citation lookup"
    interaction_mode: "interactive console"
ai_contribution_level: "substantial-drafting"
human_review: "complete"
human_review_date: "2026-05-19"
verified_citations_count: 12
fabricated_citations_count: 0
disclosure_standard: "COPE 2023 + WAME 2023 + ICMJE 2024 + STM 2025 + EU AI Act 2024/1689 Art. 50 + ENAI"
license:
  - "CC-BY-NC-SA-4.0 (prose)"
status: "release"
---

# Claude Code Nedir? Sosyal Bilimci Bakışıyla

Bu rehberin ilk broşürü basit bir soruyla başlar. Anthropic'in Claude Code aracı, sosyal bilim alanında çalışan bir araştırmacı, bir eğitimci ya da bir klinisyen için gerçekte ne anlama geliyor? Bu soruyu bir teknik kılavuzun diliyle değil, yöntemsel bir kavrayış olarak ele alıyoruz. Çünkü asıl mesele aracın ne yaptığı değil, akademik üretim sürecine nerede gerçek bir değer kattığı, nerede kalıcı bir risk taşıdığıdır. Ve 2026 yılında bu sorunun cevabı, önümüzdeki on yılın akademik pratiğini şekillendirecek.

## 1. Bir Araç mı, Yoksa Bir Dönüşüm mü?

Bir yapay zekâ aracını yalnızca daha hızlı bir arama motoru olarak görmek, klinik vaka formülasyonunu bir tanı listesine indirgemekle aynı türden bir hatadır. Vaka formülasyonu, tanıdan farklı olarak, semptomun ne olduğunu sormaz. Onu bu hastada, bu zamanda ortaya çıkaran şeyin ne olduğunu sorar. Claude Code'u bir arama kutusuna ya da bir sohbet penceresine indirgemek de sosyal bilimcinin asıl ihtiyacını gözden kaçırır. O ihtiyaç çoğu zaman bir paragrafın kelimesi kelimesine yazdırılması değildir. Bir araştırma sorusunu on kaynak boyunca tutarlı biçimde izleyebilmek, bir analiz protokolünü baştan sona belgeleyebilmek, bir manuskript revizyonunu on bir hakem yorumuna karşı bir izlenebilirlik matrisi olarak tutabilmektir.

Claude Code, sohbet penceresinin ötesinde durur. Dosya sistemine erişebilen, komut satırını çalıştırabilen, bir oturum boyunca ne yaptığını hatırlayan, gerektiğinde başka modellere ya da araçlara görev devreden bir ajan arayüzüdür. Bu ayrım yöntemsel olarak önemlidir. Çünkü sosyal bilimci için bu, aracın bir not defterinden bir laboratuvar asistanına doğru kayması demektir. Burada belirleyici olan otomasyon değil, sürekliliktir. Yıllarca biriken alan notları, hastane gözlemleri, mülakat dökümleri, dergi okumaları, ders izlenceleri, hakem değerlendirmeleri. Bütün bunlar artık tek bir araştırma ekosistemine bağlanabilir.

Ne var ki bu süreklilik, kendiliğinden entelektüel bir kalite üretmez. Stochastic parrot kavramı (Bender ve diğerleri, 2021), bir dil modelinin anlamadan, yalnızca istatistiksel kalıbı yeniden üreterek de konuşabileceğini açıkça gösterir. Aracı entelektüel bir ortağa dönüştüren çerçeveyi kuracak olan, aracın kendisi değil, onu kullanan sosyal bilimcidir. Bu çerçevenin nasıl kurulduğu ise rehberin geri kalanının konusudur.

## 2. Teknik Kimlik. Sosyal Bilimci İçin Sadece Gereken

Claude Code'u teknik olarak tanımlamak için tek bir cümle yeter. Bu, Anthropic'in büyük dil modelleri üzerine kurulu bir komut satırı uygulamasıdır. Kullanıcının izniyle yerel dosyalara ve geliştirme ortamına erişir, dosya okur ve yazar, kod çalıştırır, ağ üzerinden veri çeker ve yüksek seviyeli bir hedefi alt görevlere bölerek yürüten modüler bir ajan sistemidir.

Sosyal bilimcinin bu cümleden çıkarması gereken üç şey var.

Birincisi, bu bir tarayıcı sekmesindeki sohbet kutusu değildir. Tarayıcıdaki bir ChatGPT ya da Claude.ai oturumu, sekme kapandığında biter. Oysa Claude Code klasörlerinize ve dosyalarınıza erişebilir. Önceki bir oturumda yazılmış bir notu okuyabilir, üzerine ekleyebilir, onu başka bir dosyaya bağlayabilir. İşte bir not defteri ile bir kasa arasındaki fark tam da budur.

İkincisi, bu bir ajan sistemidir. Buradaki ajan sözcüğü, basit bir komut yanıtlama mekanizmasından fazlasını anlatır. Ajan, kendisine verilen yüksek seviyeli bir hedefi alt görevlere bölebilen, bu alt görevleri sırayla yürüten, gerektiğinde başka bir aracı çağıran, sonuçları toplayıp geri raporlayan bir yapıdır. Klinik bir benzetmeyle söylersek, bu yapı vaka formülasyonundaki biyo-psiko-sosyal modeli andırır (Engel, 1977). Bir hastanın durumu nasıl yalnızca semptomatik bir liste olarak değil, biyolojik, psikolojik ve sosyal düzeyde eşzamanlı işleyen bir sistem olarak ele alınıyorsa, ajan da bir görevi tek bir yanıt olarak değil, bir alt görev silsilesi olarak ele alır.

Üçüncüsü, bu genel amaçlı bir modeldir, sosyal bilim için özelleştirilmiş bir araç değil. Bunu unutmamak gerekir. Çünkü Türkçe akademik literatür, klinik psikoloji metodolojisi, IRB protokolleri ya da COPE yayın etiği söz konusu olduğunda araç sizin yönlendirmenize ihtiyaç duyar. Yapay zekânın hesaplamalı sosyal bilimi dönüştürme potansiyeli üzerine yürütülen çalışmalar, bu yönlendirmenin niteliğinin sonucun niteliğini doğrudan belirlediğini gösteriyor (Ziems ve diğerleri, 2024).

Özetle, sosyal bilimci için Claude Code'un teknik kimliği şudur. Yerel dosyalarınıza ve terminale erişebilen, çok adımlı görevleri yürütebilen, sizin kurduğunuz çerçeve ölçüsünde derinleşen ve sizin koymadığınız çerçeveyi kendiliğinden kurmayan bir araştırma yardımcısı.

## 3. Kimler İçin, Kimler İçin Değil

Bu broşürün açıkça kabul ettiği gerçek şudur. Claude Code herkes için değildir.

Aracın gerçekten değer kazandığı profiller bellidir. Birden fazla araştırma projesini aynı anda yürüten bir doktora öğrencisi. Çok sayıda mülakat verisini kodlama disipliniyle çözümlemesi gereken bir araştırma görevlisi. Beş ila on bir hakem yorumuna sistemli biçimde yanıt vermesi gereken bir doktora sonrası araştırmacı. Bir derste yirmi öğrencinin tezini kavramsal tutarlılık açısından gözden geçirmesi gereken bir öğretim üyesi. IRB başvurusu için elli kaynaklı bir literatür özeti hazırlayan bir klinik araştırmacı. Bütün bu profillerin ortak yanı tek bir şeydir. Yüksek hacimli, tekrar eden, yapılandırılmış ve doğrulanabilir bir iş. Üretkenlik üzerine yapılan deneysel çalışmalar, tam da bu tür yazılı görevlerde yapay zekâ yardımının hem zaman tasarrufu hem de çıktı kalitesi bakımından anlamlı bir etki yarattığını ortaya koymuştur (Noy ve Zhang, 2023).

Aracın değer yitirdiği profiller de aynı açıklıkla söylenmelidir. Tek bir özgül olgu üzerine derinlemesine etnografik bir çalışma yürüten bir araştırmacı için Claude Code, alandaki gözlem hassasiyetinin yerini tutamaz. Yardımcı bir araç olarak alan notlarını düzenlemekte işe yarayabilir, ama gözleme katılma deneyiminin yerine geçemez. Aynı şey, bir klinik vaka çalışmasındaki terapist için de geçerlidir. Araç, terapötik ilişkinin o somut anının yerini alamaz. Bu sınır yöntemsel değil, epistemolojiktir.

Kimler için olmadığını açıkça söylemek, kimler için olduğunu daha güvenilir kılar. Yapay zekânın akademik yazımdaki rolünün etik sınırlarını sistemli biçimde inceleyen literatür de, aracın değerinin görevin yapısına bağlı olduğunu vurgular (Hosseini ve diğerleri, 2023).

Bir sonraki broşür (001-01-0002), bu sohbet penceresinden iş ortağına geçişin pratik mekaniğini anlatır. Bu broşürün geri kalanı ise ilk temas senaryosunu, bölgesel gerçekleri, etik katmanı ve başlangıç protokolünü ele alıyor.

## 4. İlk Temas Senaryosu

Somut bir senaryo, soyut bir tariften çoğu zaman daha öğreticidir. O yüzden bir örnek üzerinden gidelim.

Bir doktora öğrencisi, ergenlerde sosyal medya kullanımı ile yaygın anksiyete bozukluğu arasındaki ilişki üzerine sistematik bir derleme hazırlıyor. Elinde, PubMed, Semantic Scholar ve PsycINFO üzerinden toplanmış, Zotero kütüphanesinde duran iki yüz PDF makale var. Çalışmaya üç ay önce başlamış. Şimdi ise birbiri ardına gelen sorularla karşı karşıya. Hangi makaleler Selvi ve Lewinsohn modelini kullanmış? Hangileri longitudinal bir tasarıma sahip? Hangileri Türkçe ya da Arapça örneklem kullanmış? Hangileri DSM-5-TR güncellemesinden önce yayımlanmış? Hangilerinde kontrol grubu yok?

Geleneksel yol bellidir. İki yüz PDF'i tek tek açmak, başlık, özet ve yöntem bölümlerini taramak, bir Excel tablosuna işlemek ve sonra bu tablo üzerinden sorgu çekmek. Kararlı bir doktora öğrencisi için bile bu, iki ila üç haftalık yoğun bir emektir.

Claude Code yaklaşımı ise daha ilk gün üç işlemi arka arkaya sıraya koyar. Önce Zotero kütüphanesinin üst verisini okuyup işler. Ardından her makalenin tam metninde belirli kavramların geçtiği yerleri çıkarır. Son olarak bu çıkartıları sorgulanabilir bir yapıda biriktirir. Üçü de tek bir oturumda yapılır, sonuçlar bir tabloya dökülür ve doktora öğrencisi bu tablo üzerinde elle denetimini yapar.

Bu örnekte gözden kaçırılmaması gereken üç nokta var. Birincisi, araç hiçbir makale için özet üretmez. Yalnızca tam metni sorgular ve kavramın nerede geçtiğini raporlar. Özetleme adımı doktora öğrencisinindir. İkincisi, araç hiçbir atıf üretmez. Atıflar zaten Zotero aracılığıyla doğrudan orijinal kaynaktan gelir. Böylece hayali atıf riski sıfıra iner. Üçüncüsü, araç elle denetimin yerine geçmez. Tablo, doktora öğrencisinin gözünden geçer. Yapay zekânın ürettiği özetlerin nitelikli okurları bile yanıltabildiğine dair kanıtlar (Else, 2023), bu denetim gerekliliğini hafifletmez, tersine güçlendirir.

Bu senaryo, Claude Code'un sosyal bilim için yararlı olmasının temel formülünü içinde taşır. Yapılandırılmış bir görev, doğrulanabilir bir çıktı ve son adımda insan denetimi.

Aracın asıl risk taşıdığı yer, bu formülün dışına çıkıldığı yerdir. Eğer doktora öğrencisi araca "iki yüz makaleyi özetle ve sistematik derlemeyi yaz" gibi bir komut verirse, çıktı sözdizimsel olarak kusursuz, içerik olarak güvenilmez bir metin olur. Üretici dil modellerinin niteliğinin, epistemolojik düzeyde "saçmalık" üretmeye kadar uzanabildiği, felsefi açıdan titiz bir okumayla ortaya konmuştur (Hicks ve diğerleri, 2024). Bu okumanın kavramsal zemini ise Frankfurt'un (2005) "saçmalık" kavramı üzerine yaptığı felsefi çalışmaya dayanır. Dolayısıyla belirleyici olan aracın kendisi değil, onu kullanan akademisyenin metodolojik çerçevesinin niteliğidir.

## 5. Türkiye ve Yunan Akademi Ortamı Özgüllükleri

Uluslararası akademik literatür, Türkiye, Yunanistan ve geniş Akdeniz havzasındaki kurumsal gerçekleri çoğu zaman görmezden gelir. Bu rehberin baştan sona koruduğu duruşlardan biri, tam da bu boşluğu açıkça doldurmaktır.

DergiPark, Türkiye'de yüzlerce akademik derginin yayımlandığı kurumsal platformdur. Ücretsiz açık erişim sunar ve Crossref ile entegre olduğu için DOI üretir. Claude Code, DergiPark'ta yayımlanmış bir makaleye DOI üzerinden erişebilir. Yalnızca ULAKBIM TR Dizin filtresindekilerin ayrıca taranması için ek bir yapılandırma gerekir.

ULAKBIM TR Dizin, Türkiye'de kalite denetiminden geçmiş dergilerin listesidir. Doktora değerlendirme ve akademik yükseltme süreçleri için kritik bir referanstır. Sosyal bilimci açısından bir makalenin ulusal görünürlüğünün önemli bir göstergesidir.

Yunanistan'da HEAL-Link, Yunan üniversite kütüphanelerinin ortak aboneliği üzerinden uluslararası dergilere erişim sağlar. Komotini'deki Demokritos Üniversitesi'nde bir araştırmacı bir makaleye HEAL-Link üzerinden erişebilir, ne var ki EZproxy yapılandırması her kampüste aynı değildir. Araştırmacı, Claude Code'un PubMed MCP'si üzerinden bir PubMed taraması yapabilir, ama tam metne ulaşması için yerel kütüphane proxy'sinin doğru ayarlanmış olması gerekir.

Bu altyapı ayrıntıları ilk bakışta teknik görünür. Oysa akademik üretim üzerindeki etkileri yöntemseldir. Bir araştırmacı, hangi kaynaklara erişebildiğini bilmeden bir literatür haritası kuramaz. Yapay zekâ aracı bu engelleri kendiliğinden çözmez, ama nasıl yapılandırılacağına dair tutarlı bir rehber, araştırmacının altyapıyla harcadığı zamanı çarpıcı biçimde azaltır. Bu rehberin 002 kategorisi (Akademik Erişim) tümüyle bu konuya ayrılmıştır.

## 6. Etik Katman. Birinci Düzey Uyarılar

Yapay zekâ destekli akademik üretimde etik, sonradan eklenecek bir bölüm değildir. En baştan kurulması gereken bir çerçevedir. Birinci düzey uyarıları beş başlıkta toplayabiliriz.

Birincisi, atıf bütünlüğüdür. Claude Code'a "şu konuda kaynak öner" demek, her zaman hayali bir atıf üretme riskini taşır. Bu rehberin operasyonel kuralı açıktır. Araç tarafından önerilen hiçbir atıf, bağımsız bir indekste (Crossref, PubMed, Semantic Scholar, ULAKBIM TR Dizin, DergiPark) doğrulanmadan referans listesine giremez.

İkincisi, gizliliktir. Klinik veri, mülakat dökümü ya da anonimleştirilmemiş saha notu hiçbir koşulda araçla paylaşılmamalıdır. Yapay zekânın açık biçimde kullanımı, bilimsel iletişimde sistematik bir ifşa standardı gerektirir. Araştırma için beş öncelik üzerine yayımlanan uluslararası uzlaşı (van Dis ve diğerleri, 2023), bu önceliklerin başına veri minimizasyonunu koyar. Buradan çıkan kural nettir. Klinik veri, kurumsal etik kurulun onayladığı biçimde anonimleştirilmeden araçla paylaşılmaz.

Üçüncüsü, yazarlık ve ifşadır. ChatGPT'nin bilimsel makalelerde yazar olarak gösterilip gösterilemeyeceği tartışması, COPE, ICMJE ve WAME tarafından açıkça yanıtlandı. Yapay zekâ yazar olamaz. Ama yapay zekâ yardımı, yöntem bölümünde ya da teşekkür kısmında açıkça beyan edilmek zorundadır (Stokel-Walker, 2023). Bu rehberin kuralı, her broşürün başında bir ifşa frontmatter'ı taşımasıdır.

Dördüncüsü, dil modellerinin toplumsal yansımalarıdır. Büyük dil modellerinin riskleri taksonomik olarak haritalanmıştır (Weidinger ve diğerleri, 2022). Sosyal bilimci için en kritik risk kategorileri yanlış bilgi üretimi, dezenformasyonun yayılması, ölçek sorunları ve kültürel yanlılıktır. Türkçe içerikteki yanlılık, İngilizce içerikten farklı biçimlerde belirebilir. Bu yüzden Türkçe çıktıların elle denetimi, İngilizce çıktıların denetiminden daha titiz olmalıdır.

Beşincisi, yapısal eşitsizliktir. Büyük dil modellerinin yükseköğretimde yarattığı dönüşümün, kaynak eşitsizliğini hafifletmek yerine derinleştirme ihtimali akademik literatürde belgelenmiştir (Milano ve diğerleri, 2023). Türkçe ya da Yunanca konuşan bir doktora öğrencisi, İngilizce konuşan akranıyla aynı araçlara erişse bile, dilsel kalite ve disipliner derinlik bakımından eşit koşulda sayılmamalıdır. Bu rehberin görevi, bu eşitsizliği yalnızca kabul etmek değil, ona açıkça karşı çalışmaktır.

## 7. Pratik Başlangıç Protokolü

Üç adımlı bir zihinsel hazırlık, ilk haftanın yönünü belirler.

Birinci adım, görev türünü netleştirmektir. Aracı hangi akademik üretim sürecinde kullanacaksınız? Literatür taraması mı, sistematik derleme mi, manuskript revizyonu mu, ders tasarımı mı, IRB başvurusu mu, yoksa hakem yanıt mektubu mu? Her görev türü farklı bir yapılandırma ister. Aracı "her işe yarayan" genel bir yardımcı gibi kullanmak, niteliği baştan zayıf bir başlangıçtır.

İkinci adım, bir kasa hazırlamaktır. Kasa, biriken akademik notların yaşadığı kalıcı bir klasör yapısıdır. Markdown dosyaları, frontmatter, dosya ağacı, içerik haritaları (MOC). Bu rehberin 004 kategorisi tümüyle bu konuya ayrılmıştır. İlk hafta kasayı eksiksiz kurmak gerekmez. Üç klasör bile yeter. Mevcut araştırma, mevcut yazım, mevcut okuma listesi.

Üçüncü adım, ifşa alışkanlığını yerleştirmektir. İlk haftadan başlayarak, araç yardımıyla yazılan her metin, ne kadar yardım alındığını açıkça not eden bir alt satır taşımalıdır. Bu yalnızca bir formalite değildir. Akademik üretim, gün gelir bir hakemin, bir editörün ya da bir öğrencinin önüne çıkar. O an geldiğinde ifşa belgesi çoktan orada olmalıdır.

Bu üç adımın hiçbiri teknik değildir. Üçü de yöntemseldir.

## 8. Sonuç ve Sonraki Adım

Claude Code, sosyal bilimci için bir not defteri ile bir laboratuvar asistanı arasındaki açıklığı kapatan bir araçtır. Ama değeri, kullanıcının metodolojik çerçevesiyle orantılıdır. O çerçeve hayali atıfı yasaklar, klinik veriyi korur, ifşayı en baştan kurar ve görev türünü netleştirir.

Bir sonraki broşür, sohbet penceresinden iş ortağına geçişin pratik mekaniğini anlatıyor. Hangi komutlar, hangi izinler, hangi oturum yapısı, hangi başarısızlık biçimleri. Booklet 001-01-0002 (Aracın Ötesine Geçiş) tam bu noktadan devam eder.

Bundan sonraki broşür dizisinin tamamı, bu ilk broşürde kurulan yapısal duruşun üzerine inşa edilecek. Her broşür kendi konusunda derinleşirken bu ilk çerçeveyi varsayar.

---

## Kaynakça

Atıflar APA 7 biçimindedir. Her DOI 2026-05-19 tarihinde Crossref üzerinden bağımsız olarak doğrulanmıştır.

Bender, E. M., Gebru, T., McMillan-Major, A., & Shmitchell, S. (2021). On the dangers of stochastic parrots: Can language models be too big? In *Proceedings of the 2021 ACM Conference on Fairness, Accountability, and Transparency (FAccT '21)* (pp. 610-623). Association for Computing Machinery. https://doi.org/10.1145/3442188.3445922

Else, H. (2023). Abstracts written by ChatGPT fool scientists. *Nature*, 613(7944), 423. https://doi.org/10.1038/d41586-023-00056-7

Engel, G. L. (1977). The need for a new medical model: A challenge for biomedicine. *Science*, 196(4286), 129-136. https://doi.org/10.1126/science.847460

Frankfurt, H. G. (2005). *On bullshit*. Princeton University Press. ISBN 978-0-691-12294-6

Hicks, M. T., Humphries, J., & Slater, J. (2024). ChatGPT is bullshit. *Ethics and Information Technology*, 26(2), 38. https://doi.org/10.1007/s10676-024-09775-5

Hosseini, M., Rasmussen, L. M., & Resnik, D. B. (2023). Using AI to write scholarly publications. *Accountability in Research*, 30(7-8), 1-9. https://doi.org/10.1080/08989621.2023.2168535

Milano, S., McGrane, J. A., & Leonelli, S. (2023). Large language models challenge the future of higher education. *Nature Machine Intelligence*, 5(4), 333-334. https://doi.org/10.1038/s42256-023-00644-2

Noy, S., & Zhang, W. (2023). Experimental evidence on the productivity effects of generative artificial intelligence. *Science*, 381(6654), 187-192. https://doi.org/10.1126/science.adh2586

Stokel-Walker, C. (2023). ChatGPT listed as author on research papers: Many scientists disapprove. *Nature*, 613(7945), 620-621. https://doi.org/10.1038/d41586-023-00107-z

van Dis, E. A. M., Bollen, J., Zuidema, W., van Rooij, R., & Bockting, C. L. (2023). ChatGPT: Five priorities for research. *Nature*, 614(7947), 224-226. https://doi.org/10.1038/d41586-023-00288-7

Weidinger, L., Uesato, J., Rauh, M., Griffin, C., Huang, P.-S., Mellor, J., Glaese, A., Cheng, M., Balle, B., Kasirzadeh, A., Biles, C., Brown, S., Kenton, Z., Hawkins, W., Stepleton, T., Birhane, A., Hendricks, L. A., Rimell, L., Isaac, W., ... Gabriel, I. (2022). Taxonomy of risks posed by language models. In *2022 ACM Conference on Fairness, Accountability, and Transparency* (pp. 214-229). Association for Computing Machinery. https://doi.org/10.1145/3531146.3533088

Ziems, C., Held, W., Shaikh, O., Chen, J., Zhang, Z., & Yang, D. (2024). Can large language models transform computational social science? *Computational Linguistics*, 50(1), 237-291. https://doi.org/10.1162/coli_a_00502

---

**Broşür kimliği.** `001-01-0001`
**Sürüm.** `0.1.0`
**Tarih.** 2026-05-19
**Sözcük sayısı (yaklaşık).** 1997 (Türkçe govde metni, wc ile ölçüldü)
**Doğrulanmış atıf sayısı.** 12
**Halüsinasyon atıf sayısı.** 0
**Önceki broşür.** Yok (ilk broşür)
**Sonraki broşür.** [`001-01-0002`](../001-01-0002/tr.md). Aracın Ötesine Geçiş: Sohbet Penceresinden İş Ortağına
