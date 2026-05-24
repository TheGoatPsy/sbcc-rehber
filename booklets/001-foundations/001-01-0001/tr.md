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

Bu rehberin ilk broşürü, Anthropic Claude Code'un sosyal bilim alanında çalışan bir araştırmacı, eğitimci ya da klinisyen için ne anlama geldiğine dair temel bir çerçeve sunar. Aracın tarifini bir teknik kılavuz gibi değil, bir yöntemsel kavrayış olarak ele alır. Hedef, Claude Code'un akademik üretim sürecine hangi noktalarda gerçek bir değer kattığını, hangi noktalarda kalıcı bir risk taşıdığını ve neden 2026 yılında bu sorunun cevabının önümüzdeki on yılın akademik pratiğini şekillendireceğini ortaya koymaktır.

## 1. Bir Araç mı, Yoksa Bir Dönüşüm mü?

Yapay zekâ araçlarını yalnızca daha hızlı bir arama motoru olarak görmek, klinik vaka formülasyonunu yalnızca bir tanı listesi olarak görmekle aynı kategoride bir hatadır. Vaka formülasyonu, tanıdan farklı olarak, semptomun ne olduğunu değil neden bu hastada bu zamanda ortaya çıktığını sorar. Aynı şekilde, Claude Code'u bir arama motoru ya da bir sohbet penceresi olarak indirgemek, sosyal bilim araştırmacısının asıl ihtiyacı olanı gözden kaçırır. Asıl ihtiyaç, bir paragrafın kelime kelime yazdırılması değil, bir araştırma sorusunun on kaynak üzerinde tutarlı bir şekilde takip edilmesi, bir analiz protokolünün baştan sona belgelenmesi, bir manuskript revizyonunun on bir hakem yorumuna karşılık bir izlenebilirlik matrisi olarak tutulabilmesidir.

Claude Code, sohbet penceresinin ötesindedir. Dosya sistemine erişebilen, komut satırını çalıştırabilen, bir oturum boyunca ne yaptığını hatırlayabilen, başka modellere veya araçlara görev devredebilen bir ajan arayüzüdür. Bu fark, yöntemsel olarak önemlidir. Sosyal bilimci için bu, aracın bir not defterinden bir laboratuvar asistanına doğru kayması demektir. Önemli olan otomasyon değil, sürekliliktir. Yıllarca biriken alan notları, hastane gözlemleri, mülakat transkriptleri, dergi okumaları, ders müfredatları, hakem değerlendirmeleri. Bunların hepsi şimdi tek bir araştırma ekosistemine bağlanabilir hâle gelir.

Ancak bu süreklilik, kendiliğinden bir entelektüel kalite üretmez. Stochastic parrot kavramı (Bender ve diğerleri, 2021), yapay zekânın anlamaksızın istatistiksel kalıbı yeniden üretmesinin riskini açıkça ortaya koyar. Sosyal bilim araştırmacısının görevi, aracı entelektüel ortağa dönüştüren çerçeveyi kendi koymaktır. Bu çerçevenin nasıl kurulduğu, bu rehberin geri kalanının konusudur.

## 2. Teknik Kimlik. Sosyal Bilimci İçin Sadece Gereken

Claude Code'u teknik olarak tanımlamak için tek bir cümle yeterlidir. Bu bir komut satırı uygulamasıdır, Anthropic'in büyük dil modelleri üzerine kuruludur, kullanıcının yerel dosyalarına ve geliştirme ortamına erişim yetkisi alan, kullanıcı izniyle dosya yazan, okuyan, kodu çalıştıran, ağ üzerinden veri çeken, modülerleştirilmiş bir ajan sistemidir.

Sosyal bilimcinin bu cümleden anlaması gereken üç şey vardır.

Birincisi, bu bir tarayıcıdaki sohbet kutusu değildir. Tarayıcıdaki ChatGPT veya Claude.ai oturumu, kapatıldığında biten bir oturumdur. Claude Code, klasörünüze ve dosyalarınıza erişebilir. Daha önceki oturumda yazılan bir notu okuyabilir, üzerine ekleme yapabilir, başka bir dosyaya bağlantı kurabilir. Bu, akademik üretim için bir not defteri ile bir kasa arasındaki farkı yaratır.

İkincisi, bu bir ajan sistemidir. Ajan sözcüğünün buradaki anlamı, basit bir komut yanıtlama mekanizmasından farklıdır. Ajan, kendisine verilen yüksek seviyeli bir hedefi alt görevlere bölebilen, bu alt görevleri sırayla yürüten, gerektiğinde başka bir aracı çağıran, sonuçları toplayan ve geri raporlayan bir yapıdır. Klinik analoji açısından bu, vaka formülasyonunda kullanılan biyo-psiko-sosyal modele benzer (Engel, 1977). Bir hastanın durumu yalnızca semptomatik bir liste olarak değil, biyolojik, psikolojik ve sosyal düzeyde eşzamanlı çalışan bir sistem olarak ele alınır. Ajan modeli de benzer şekilde, bir görevi tek bir yanıt olarak değil, bir alt görev silsilesi olarak ele alır.

Üçüncüsü, bu bir genel amaçlı modeldir, sosyal bilim için özelleştirilmiş bir araç değildir. Bu önemlidir, çünkü Türkçe akademik literatür, klinik psikoloji metodolojisi, IRB protokolleri, COPE yayın etiği gibi alanlarda araç sizin yönlendirmenize ihtiyaç duyar. Yapay zekânın hesaplamalı sosyal bilimi dönüştürme potansiyeli üzerine yapılan çalışmalar, bu yönlendirmenin niteliğinin sonuç kalitesini doğrudan belirlediğini gösterir (Ziems ve diğerleri, 2024).

Sosyal bilimci için Claude Code'un teknik kimliği özetle şudur. Yerel dosyalarınıza ve terminale erişebilen, çok adımlı görevleri yürütebilen, sizin kurduğunuz çerçeve ölçüsünde derinleşen, sizin koymadığınız çerçeveyi kendiliğinden koymayan bir araştırma yardımcısı.

## 3. Kimler İçin, Kimler İçin Değil

Bu broşürün uyumluluk açısından doğrudan kabul ettiği gerçek şudur. Claude Code, herkes için değildir.

Aracın gerçek değer kazandığı profiller şunlardır. Birden fazla araştırma projesini eşzamanlı yürüten bir doktora öğrencisi, çoklu mülakat verisinin nitel analizini kodlama disipliniyle yapması gereken bir araştırma görevlisi, beş ila on bir hakem yorumuna sistemli olarak yanıt vermesi gereken bir doktora sonrası araştırmacı, bir derste yirmi öğrencinin yazdığı tezin kavramsal tutarlılığını gözden geçirmesi gereken bir öğretim üyesi, IRB başvurusu için elli kaynaklı bir literatür özeti hazırlaması gereken bir klinik araştırmacı. Bu profillerin ortak noktası şudur. Yüksek hacimli, tekrar eden, yapılandırılmış, doğrulanabilir bir işin olması. Üretkenlik etkisi üzerine yapılan deneysel çalışmalar, bu tür yazılı görevlerde yapay zekâ asistanlığının zaman tasarrufu ve çıktı kalitesi üzerinde anlamlı etkiler yarattığını ortaya koymuştur (Noy ve Zhang, 2023).

Aracın değer kaybettiği profiller de aynı netlikle ortaya konmalıdır. Tek bir özel olgu üzerine derinlemesine etnografik bir çalışma yürüten araştırmacı için Claude Code, alandaki gözlem hassasiyetini ikame edemez. Yapay zekâ destekli bir asistan, alan notlarının düzenlenmesinde yararlı olabilir, ancak gözleme katılma deneyiminin yerine geçemez. Aynı şekilde, klinik vaka çalışmasında yer alan bir terapist için Claude Code, terapötik ilişkinin somut anının yerine geçemez. Bu sınır, yöntemsel değil epistemolojik bir sınırdır.

Kimler için olmadığını açıkça söylemek, kimler için olduğunu daha güvenilir kılar. Yapay zekânın akademik yazımdaki rolünün etik sınırlarını sistemli olarak inceleyen literatür, aracın değerinin görevin yapısına bağlı olduğunu vurgular (Hosseini ve diğerleri, 2023).

Bir sonraki broşür (001-01-0002), bu sohbet penceresinden iş ortağına geçişin pratik mekaniğini anlatır. Bu broşürün geri kalanı, ilk temas senaryosunu, bölgesel gerçekleri, etik katmanı ve başlangıç protokolünü ele alır.

## 4. İlk Temas Senaryosu

Pratik bir senaryo, soyut bir tarif kadar yararlı değildir. Burada bir örnek üzerinden gidelim.

Bir doktora öğrencisi, ergen yaş grubunda sosyal medya kullanımı ile yaygın anksiyete bozukluğu arasındaki ilişki üzerine sistematik bir derleme hazırlamaktadır. Elinde Zotero kütüphanesinde toplanmış iki yüz PDF makale vardır. PubMed, Semantic Scholar ve PsycINFO üzerinden derlenmiştir. Üç ay önce hazırlanmaya başlanmıştır. Şimdi şu sorularla karşı karşıyadır. Hangi makaleler Selvi ve Lewinsohn modelini kullanmıştır? Hangileri longitudinal tasarımdır? Hangileri Türkçe ya da Arapça örneklem kullanmıştır? Hangileri DSM-5-TR güncellemesinden önce yayımlanmıştır? Hangileri kontrol grubu içermez?

Geleneksel yaklaşım, iki yüz PDF'i tek tek açmak, başlık, özet ve yöntem bölümlerini taramak, bir Excel tablosuna düşmek, sonra bu tablo üzerinden sorgu çekmektir. Bu yaklaşım, kararlı bir doktora öğrencisi için iki ila üç haftalık yoğun bir iştir.

Claude Code yaklaşımı, ilk gün üç farklı işlemi sıraya koyar. Birinci işlem, Zotero kütüphanesinin metadata'sını okuyup işlemek. İkinci işlem, her makalenin tam metni üzerinden belirli kavramların geçtiği yerleri çıkarmak. Üçüncü işlem, bu çıkartıları sorgulanabilir bir yapıda biriktirmek. Bu üç işlem, bir oturumda yapılır. Sonuçlar bir tabloya dökülür. Doktora öğrencisi, bu tablonun üzerinden manuel kontrol yapar.

Bu örnekte üç önemli nokta vardır. Birincisi, araç hiçbir makale hakkında özet üretmez. Araç, makalenin tam metnini sorgular, kavramın geçtiği yeri raporlar. Özetleme adımı doktora öğrencisinindir. İkincisi, araç hiçbir atıf üretmez. Atıfları zaten Zotero üzerinden orijinal kaynaktan çekilir. Bu, hayali atıf riskini sıfıra indirir. Üçüncüsü, araç manuel kontrolün yerine geçmez. Hesaplama tablosu doktora öğrencisinin gözünden geçer. Yapay zekâ tarafından üretilen özetlerin nitelikli okurları yanıltabildiğine dair kanıtlar (Else, 2023), bu manuel kontrol gerekliliğini hafifletmez, tersine pekiştirir.

Bu senaryo, Claude Code'un sosyal bilim için yararlı olmasının temel formülünü içerir. Yapılandırılmış bir görev, doğrulanabilir bir çıktı, son adımda insan kontrolü.

Aracın asıl risk taşıdığı yer, bu formülün dışına çıkıldığı yerdir. Eğer doktora öğrencisi araca "iki yüz makaleyi özetle ve sistematik derleme yaz" gibi bir komut verirse, çıktı sözdizimsel olarak geçerli, içerik olarak güvenilmez bir metin olur. Üretici dil modellerinin niteliğinin epistemolojik düzeyde "saçmalık" üretme kapasitesine kadar uzandığı, felsefi olarak titiz bir okumayla ortaya konulmuştur (Hicks ve diğerleri, 2024). Bu okumanın kavramsal alt yapısı, Frankfurt'un (2005) "saçmalık" kavramı üzerine yaptığı felsefi çalışmaya dayanır. Bu nedenle aracın değil, kullanan akademisyenin metodolojik çerçevesinin niteliği belirleyicidir.

## 5. Türkiye ve Yunan Akademi Ortamı Özgüllükleri

Uluslararası akademik literatür, Türkiye, Yunanistan ve geniş Akdeniz havzasındaki kurumsal gerçekleri genelde göz ardı eder. Bu broşürün rehber boyunca koruduğu pozisyonlardan biri, bu boşluğu açıkça doldurmaktır.

DergiPark, Türkiye'de yüzlerce akademik derginin yayımlandığı kurumsal platformdur. Ücretsiz açık erişim sağlar. Crossref ile entegre olduğu için DOI üretir. Claude Code, DergiPark üzerinde yayımlanmış bir makaleye DOI üzerinden erişebilir, sadece ULAKBIM TR Dizin filtresinde olanların ayrı olarak taranması için ek yapılandırma gerekir.

ULAKBIM TR Dizin, Türkiye'deki kalite kontrolden geçmiş dergilerin listesidir. Türkiye'deki doktora değerlendirme süreçleri ve akademik yükseltme süreçleri için kritik bir referans. Sosyal bilim araştırmacısı için bu, bir makalenin ulusal görünürlüğünün önemli bir göstergesidir.

Yunanistan'da HEAL-Link, Yunan üniversite kütüphanelerinin müşterek aboneliği üzerinden uluslararası dergilere erişim sağlar. Komotini'deki Demokritus Üniversitesi araştırmacısı bir makaleye HEAL-Link üzerinden erişebilir, ancak EZproxy yapılandırması her kampüste tek tip değildir. Claude Code'un PubMed MCP'si üzerinden bir araştırmacı PubMed taraması yapabilir, ancak full-text erişimi için yerel kütüphane proxy'sinin doğru ayarlanması gerekir.

Bu altyapı detayları, ilk bakışta teknik görünür. Ancak akademik üretim üzerindeki etkileri yöntemseldir. Bir araştırmacı, hangi kaynaklara erişebildiğini bilmeden bir literatür haritası kuramaz. Yapay zekâ aracı bu engelleri otomatik olarak çözmez, ama nasıl yapılandırılacağına dair tutarlı bir rehber, araştırmacının altyapıyla geçirdiği zamanı dramatik ölçüde azaltır. Bu rehberin 002 kategorisi (Akademik Erişim) tamamen bu konuya ayrılmıştır.

## 6. Etik Katman. Birinci Düzey Uyarılar

Yapay zekâ destekli akademik üretimde etik, sonradan eklenecek bir bölüm değildir. Başlangıçta kurulması gereken bir çerçevedir. Birinci düzey uyarıları beş başlıkta özetlemek mümkündür.

Birincisi, atıf bütünlüğüdür. Claude Code'a "X konusunda kaynak öner" demek, hayali bir atıf üretme riskini her zaman taşır. Bu rehberin operasyonel kuralı net. Araç tarafından önerilen her atıf, bağımsız bir indekste (Crossref, PubMed, Semantic Scholar, ULAKBIM TR Dizin, DergiPark) doğrulanmadan referans listesine girmez.

İkincisi, gizliliktir. Klinik veri, mülakat transkripti, anonim olmayan saha notu hiçbir koşulda araç ile paylaşılmamalıdır. Yapay zekânın açık kullanımı, bilimsel iletişimde sistematik bir ifşa standardı gerektirmektedir. Beş bilimsel öncelik üzerine yayımlanmış uluslararası uzlaşı (van Dis ve diğerleri, 2023), gizliliğin başında veri minimizasyonunu koyar. Bu rehberin kuralı, klinik veriyi anonimleştirmeden, kurumsal etik kurul onayının izin verdiği biçimden bağımsız olarak araç ile paylaşmamaktır.

Üçüncüsü, yazarlık ve ifşadır. ChatGPT'nin bilimsel makalelerde yazar olarak listelenmesi tartışması, COPE, ICMJE ve WAME tarafından net olarak yanıtlandı. Yapay zekâ yazar olamaz. Ancak yapay zekâ yardımı, metodoloji bölümünde ya da teşekkür bölümünde açıkça beyan edilmek zorundadır (Stokel-Walker, 2023). Bu rehberin kuralı, her broşürün başlığında ifşa frontmatter'ı bulundurmaktır.

Dördüncüsü, dil modellerinin sosyal yansımalarıdır. Büyük dil modellerinin riskleri taksonomik olarak haritalanmıştır (Weidinger ve diğerleri, 2022). Sosyal bilimci için en kritik risk kategorileri, yanlış bilgi üretimi, dezenformasyon yayılımı, ölçek sorunları ve kültürel yanlılıktır. Türkçe içerikte yanlılık, İngilizce içerikten farklı biçimlerde görülebilir. Bu nedenle Türkçe çıktıların manuel kontrolü, İngilizce çıktıların kontrolünden daha titiz olmalıdır.

Beşincisi, yapısal eşitsizliktir. Yüksek öğretimde büyük dil modellerinin yarattığı dönüşümün, kaynak eşitsizliğini hafifletmek yerine derinleştirme potansiyeli akademik literatürde belgelenmiştir (Milano ve diğerleri, 2023). Türkçe ya da Yunanca konuşan bir doktora öğrencisinin İngilizce konuşan akranıyla aynı araçlara erişimi olsa bile, dilsel kalite ve disipliner derinlik açısından eşit olmadığı düşünülmelidir. Bu rehberin görevi, bu eşitsizliği basitçe kabul etmek değil, açıkça karşı çalışmaktır.

## 7. Pratik Başlangıç Protokolü

Üç adımlı bir zihinsel hazırlık protokolü, ilk haftanın yönünü belirler.

Birinci adım, görev türünün netleştirilmesidir. Hangi tür akademik üretim sürecinde aracı kullanacaksınız? Literatür taraması, sistematik derleme, manuskript revizyonu, ders tasarımı, IRB başvurusu, hakem yanıt mektubu. Her bir görev türü, farklı bir yapılandırma gerektirir. Aracı genel amaçlı "her şey için" bir yardımcı olarak kullanmak, niteliği zayıf bir başlangıçtır.

İkinci adım, bir kasanın hazırlanmasıdır. Kasa, biriktirilen akademik notların yaşayacağı kalıcı bir klasör yapısıdır. Markdown dosyaları, frontmatter, dosya ağacı, içerik haritaları (MOC). Bu rehberin 004 kategorisi tamamen bu konuya ayrılmıştır. İlk hafta kasayı eksiksiz kurmak gerekmez. Sadece üç klasör yeterlidir. Mevcut araştırma, mevcut yazım, mevcut okuma listesi.

Üçüncü adım, ifşa alışkanlığının yerleşmesidir. İlk haftadan itibaren araç yardımıyla yazılan her metin, ne kadar yardım alındığını açıkça not eden bir alt satır taşımalıdır. Bu, sadece bir formaliyet değildir. Akademik üretimin yapısı, gerçek dünyada bir hakemin, bir editörün, bir öğrencinin önüne sunulduğunda, ifşa belgesi mevcut olmalıdır.

Bu üç adımın hiçbiri teknik değildir. Hepsi yöntemseldir.

## 8. Sonuç ve Sonraki Adım

Claude Code, sosyal bilim araştırmacısı için bir not defteri ile bir laboratuvar asistanı arasındaki farkı kapatan bir araçtır. Aracın değeri, kullanıcının metodolojik çerçevesi ile orantılıdır. Bu çerçeve, hayali atıfı yasaklar, klinik veriyi korur, ifşayı baştan kurar, görev türünü netleştirir.

Bir sonraki broşür, sohbet penceresinden iş ortağına geçişin pratik mekaniğini anlatır. Hangi komutlar, hangi izinler, hangi oturum yapısı, hangi başarısızlık modları. Booklet 001-01-0002 (Aracın Ötesine Geçiş) bu noktadan devam eder.

Bundan sonraki broşür dizisinin tamamı, bu ilk broşürdeki yapısal pozisyon üzerine kurulacaktır. Her broşür, kendi konusunda derinleşirken, bu ilk yapıyı varsayar.

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
**Sözcük sayısı (yaklaşık).** 1997 (Türkçe gövde metni, wc ile ölçüldü)
**Doğrulanmış atıf sayısı.** 12
**Halüsinasyon atıf sayısı.** 0
**Önceki broşür.** Yok (ilk broşür)
**Sonraki broşür.** [`001-01-0002`](../001-01-0002/tr.md). Aracın Ötesine Geçiş: Sohbet Penceresinden İş Ortağına
