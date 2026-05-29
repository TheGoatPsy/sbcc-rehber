---
title_en: "Reproducible Quantitative Workflows"
title_tr: "Yeniden Üretilebilir Nicel İş Akışları"
booklet_id: "008-01-0001"
category: "008-data-analysis"
language: "tr"
version: "0.1.0"
date_published: "2026-05-29"
date_last_revised: "2026-05-29"
authors:
  - name: "Onour Impram"
    orcid: "0000-0003-1076-3928"
    role: "author, principal reviewer"
ai_assisted: true
ai_tools:
  - name: "Claude Code"
    vendor: "Anthropic"
    model_alias: "claude-opus-4-8"
    model_dated: null  # Anthropic, Opus 4.8 için tarihli tanımlayıcı yayımlamadı (2026-05-29)
    role: "drafting, verification, citation lookup, bilingual authoring"
    interaction_mode: "interactive console"
ai_contribution_level: "substantial-drafting"
human_review: "complete"
human_review_date: "2026-05-29"
verified_citations_count: 9
fabricated_citations_count: 0
disclosure_standard: "COPE 2023 + WAME 2023 + ICMJE 2024 + STM 2025 + EU AI Act 2024/1689 Art. 50 + ENAI"
license:
  - "CC-BY-NC-SA-4.0 (prose)"
status: "release"
---

# Yeniden Üretilebilir Nicel İş Akışları

Bu rehberin önceki broşürleri aracın ne olduğunu, sohbet penceresinden nasıl ayrıldığını, nasıl kurulduğunu ve hangi kalıcı talimatlarla yönetildiğini ele aldı. Bu broşür, sosyal bilimcinin coding agent ile en sık yaptığı işe odaklanır. Nicel veri analizi. Anthropic'in 2026 yılında ABD ve Kanada'daki 1.260 nicel sosyal bilimciyle yaptığı tarama, ankete katılan coding agent kullanıcılarının ezici çoğunluğunun aracı kod üretmek için, en çok da nicel veriyi analiz etmek için kullandığını bulur (Lyttelton ve diğerleri, 2026). Ama analizi bir ajana devretmek, yeniden üretilebilirliği kendiliğinden getirmez. Tersine, yeni bir kırılganlık yaratır. Bu broşür, otonom analiz akışını dürüst ve yeniden üretilebilir tutmanın disiplinini ele alır.

## 1. Ajansal analizin zor problemi

Bir ajan, bir veri setini ve bir araştırma fikrini alıp analizi yazabilir, çalıştırabilir, çıktıyı yorumlayabilir ve kendi başına yineleyebilir. Anthropic'in taraması, kullanımın bu yönde yoğunlaştığını ortaya koyar (Lyttelton ve diğerleri, 2026). Bu, hem gücün hem riskin kaynağıdır. Hesaplamalı araştırmada yeniden üretilebilirlik, başkasının ya da aylar sonra aynı araştırmacının aynı veriden aynı sonuca ulaşabilmesi demektir (Peng, 2011). Bir ajan analizi saniyeler içinde ürettiğinde, ara kararlar, denenen yollar ve nihai koda götüren muhakeme görünmez kalabilir.

Sandve ve diğerleri (2013), yeniden üretilebilir hesaplamalı araştırma için on basit kural sıralar. Bu kuralların özünde, sürecin her adımının kaydedilmesi ve mümkün olduğunca otomatikleştirilmesi yatar. Ajansal analiz bu disiplini kolaylaştırmaz, aksine zorlaştırır. Çünkü hızın getirdiği kolaylık, kayıt tutma alışkanlığının önüne geçmeye eğilimlidir. Sonuç bir saniyede gelirse, onu nasıl ürettiğinizi yazmak gereksiz görünür. Oysa bir yıl sonra o sonucu yeniden üreten kişi için, tam da o kayıt belirleyicidir.

## 2. İşi ajan yaptığında yeniden üretilebilir ne demek

Bir analiz, çıktısı değil, çıktısına götüren süreç sabitlendiğinde yeniden üretilebilir olur. Ajansal bir akışta bu sürecin en az beş bileşeni kayda geçmelidir. Birincisi komut. Ajana verilen istem, analizi tanımlayan asıl metindir. İkincisi model ve sürümü. Aynı istem farklı bir modelde farklı kod üretebilir. Üçüncüsü veri sürümü. Verinin hangi anlık görüntüsünün kullanıldığı, bir sağlama değeri ya da sürüm etiketiyle sabitlenmelidir. Dördüncüsü rastgelelik tohumu. Bölme, örnekleme ve önyükleme içeren her adım, sabit bir tohum olmadan her çalışmada farklı sonuç verir. Beşincisi çalışma ortamı. Paketlerin sürümleri, sonucu sessizce değiştirebilir.

Bu beş bileşen, bu rehberin daha önce tanıttığı iki kalıba doğrudan bağlanır. `CLAUDE.md`, modeli, talimatı ve sınırları sabitleyerek analizin yapay zekâ bileşenini belgeler (broşür 001-01-0004). Kasa olarak hafıza ise istemleri, ara kararları ve veri pasaportlarını oturumlar arası saklayarak süreci izlenebilir kılar (broşür 003-01-0001). Birlikte, ajansal analizi tek seferlik bir sihir olmaktan çıkarıp belgelenmiş bir yordama dönüştürürler.

## 3. Çatallanan yolların bahçesi, artık otomatik

Bir veri setinde sayısız geçerli analiz yolu vardır. Hangi değişkenlerin dışlanacağı, hangi dönüşümün uygulanacağı, hangi alt grubun inceleneceği. Gelman ve Loken (2014), bu durumu çatallanan yolların bahçesi olarak adlandırır. Araştırmacı tek bir hipotezi sınadığını sanırken, veriye bağlı olarak verdiği kararlar görünmez bir çoklu karşılaştırmalar ağacı yaratır. Simmons ve diğerleri (2011), bu araştırmacı serbestlik derecelerinin, açıkça raporlanmadığında, neredeyse her sonucu istatistiksel olarak anlamlı gösterebileceğini deneysel olarak ortaya koyar.

Bir ajan, bu sorunu nicelik olarak büyütür. Bir araştırmacının saatler harcayacağı onlarca spesifikasyonu, ajan saniyeler içinde dener ve en temiz görüneni sunabilir. Niyet kötü olmasa bile, sonuç seçici raporlamadır. Anthropic'in taraması, ankete katılan araştırmacıların tam da bu riskten, yapay zekânın seçici raporlamayı ve riskten kaçınan artımsal araştırmayı kötüleştirmesinden çekindiğini kaydeder (Lyttelton ve diğerleri, 2026). Ajansal hız, bu korkuyu somut bir tehlikeye çevirir.

## 4. Ön kayıt zihniyeti ve spesifikasyon günlüğü

Bu tehlikenin panzehiri eskidir ve ajansal çağda daha da değerlidir. Ön kayıt, analiz planını veriye bakmadan ya da en azından ajanı çalıştırmadan önce yazıya dökmektir. Nosek ve diğerleri (2018), ön kaydın doğrulayıcı ile keşfedici analizi ayırarak bu serbestlik derecelerini kontrol altına aldığını savunur. Munafò ve diğerleri (2017), yeniden üretilebilir bilim için bir manifestoda, ön kaydı ve şeffaf raporlamayı alanın yapısal sağlamlığının temeli sayar.

Ajansal akışta bunun somut hâli bir spesifikasyon günlüğüdür. Ajanı çalıştırmadan önce, planlanan analizi, asıl hipotezi ve önceden belirlenmiş kararları yazın. Ajan keşif sırasında alternatif spesifikasyonlar denerse, bunlar keşfedici olarak etiketlenir, doğrulayıcı sonucun yerine geçmez. Plandan her sapma günlüğe işlenir. Böylece ajanın ürettiği zenginlik, gizli bir balık avı değil, açıkça raporlanan bir duyarlılık analizine dönüşür.

## 5. Bulan notlayan olamaz, istatistiğe uygulanmış

Bu rehberin tekrar eden ilkesi, bir bulguyu üreten aracın aynı zamanda onu onaylayan merci olamayacağıdır. İstatistikte bu ilke iki kat önemlidir. Bir ajan, bir testin çıktısını yorumlarken, çıktının kendisiyle çelişen bir özet sunabilir. Katsayının işaretini, anlamlılık eşiğini ya da etki büyüklüğünü yanlış aktarabilir. Bu nedenle ajanın yorumu, ham çıktıya karşı bağımsız olarak doğrulanmalıdır.

Bu uyarının gerekçesi modelin doğasındadır. Model, anlamadan istatistiksel örüntü üreten bir sistemdir, ve en titiz talimatla bile bu risk sürer (Bender ve diğerleri, 2021). Üretilen metin, epistemik düzeyde, doğru görünmek ile doğru olmak arasındaki farkı kendiliğinden gözetmeyen bir karaktere sahip olabilir (Hicks ve diğerleri, 2024). Bir regresyon tablosunun akıcı bir özeti, tablonun söylediğini söylediği anlamına gelmez. Araştırmacı, ajanın anlatısını değil, sayının kendisini okur.

## 6. Prosedürü devret, yargıyı devretme

Ajansal analizde devredilebilen ile devredilemeyen arasındaki çizgi, yeniden üretilebilirlik kadar önemlidir. Devredilebilen, tekrar eden yordamlardır. Veriyi yükleme, dönüştürme, bir grafiği üretme, bir tabloyu biçimlendirme. Devredilemeyen, istatistiksel yargıdır. Hangi testin veri yapısına uygun olduğu, hangi varsayımın savunulabilir olduğu, hangi gözlemin meşru biçimde dışlanabileceği, ve bir etki büyüklüğünün kuramsal olarak ne anlama geldiği araştırmacıda kalmalıdır.

Bir ajan, belirli bir test önerebilir ve gerekçesini açıklayabilir. Ama o gerekçenin geçerliliğine karar vermek, alanın kuramını ve verinin bağlamını bilen araştırmacının işidir. Talimat dosyası yordamı dışsallaştırır, yargıyı değil (broşür 001-01-0004). Ajan, analizi hızlandıran bir yardımcıdır, sorumluluğu taşıyan yazar değil.

## 7. Pratikte yeniden üretilebilir ajansal iş akışı

Bu disiplin, somut ve uygulanabilir bir kontrol listesine iner. Birincisi, her rastgele adımda tohumu sabitleyin ve bu tohumu kaydedin. İkincisi, çalışma ortamını yakalayın. Paket sürümlerini bir kilit dosyasında dondurun ki analiz, bir yıl sonra aynı ortamda çalışsın. Üçüncüsü, analizi en baştan temiz bir oturumda yeniden çalıştırın. Birikmiş durum üzerinde çalışan bir sonuç, yeniden üretilebilir değildir. Dördüncüsü, ajanın izlediği yolu günlüğe yazın. Hangi spesifikasyonların denendiği, hangisinin neden seçildiği kaydedilmelidir. Beşincisi, asıl istemi ve model sürümünü çıktının yanında arşivleyin.

Bu beş adım, Sandve ve diğerleri (2013) tarafından sıralanan ilkenin ajansal akışa taşınmış hâlidir. Sürecin her adımını kaydedin ve otomatikleştirin. Talimat dosyası, bir makalenin yöntem bölümünün makineye bakan yüzüyse, bu günlük de analizin sağlama defteridir. Onsuz, ajanın hızı yeniden üretilebilirliğin düşmanı olur. Onunla, ajan yeniden üretilebilirliğin hizmetine girer.

## 8. Yapay zekânın analitik rolünün dürüst ifşası

Analizde kullanılan yapay zekâ, makalenin yöntem ya da katkı beyanında açıkça ifşa edilmelidir. Bu rehberin etik broşürü, ifşanın prensipten davranışa nasıl indiğini gösterir (broşür 009-01-0001). Bu broşürün kendisi de bir örnektir. Frontmatter bloğu, metnin büyük ölçüde yapay zekâ tarafından, insan onaylı bir taslak üzerinden yazıldığını ve yazar tarafından gözden geçirildiğini beyan eder. Aynı dürüstlük, bir ajanın yürüttüğü analiz için de geçerlidir.

İfşa, beş düzeyli bir ölçek üzerinden somutlaşır (`AI-AUTHORSHIP.md`). Ajan yalnızca kodu biçimlendirdiyse bu bir düzeydir, analizi baştan sona tasarlayıp yürüttüyse bambaşka bir düzeydir. Araştırmacı, hangi kararın kendisine, hangisinin araca ait olduğunu kaydeder. Bu kayıt, hem yeniden üretilebilirliğin hem de bilimsel dürüstlüğün koşuludur. Şeffaf ifşa, ankete katılan araştırmacıların işaret ettiği kalite erozyonuna verilmiş doğrudan bir cevaptır.

## 9. Bir sonraki broşür

Bu broşür, nicel iş akışlarının yeniden üretilebilirlik omurgasını kurdu. Veri analizi kategorisinin sonraki broşürleri bu temeli genişletecek. İstatistiksel test seçiminde yapay zekâ danışma disiplini, ve nitel kodlamada insan gözetimi. Bu arada, analizde yapay zekânın rolünün dürüst ifşası, etik broşüründe daha geniş bir çerçeveye oturur. Broşür 009-01-0001 buradan devam eder.

---

## Kaynakça

Atıflar APA 7 biçimindedir. Her DOI ve tanımlayıcı, 2026-05-29 tarihinde Crossref, doi.org veya yayıncı sayfası üzerinden bağımsız olarak doğrulanmıştır.

Bender, E. M., Gebru, T., McMillan-Major, A., & Shmitchell, S. (2021). On the dangers of stochastic parrots: Can language models be too big? In *Proceedings of the 2021 ACM Conference on Fairness, Accountability, and Transparency (FAccT '21)* (pp. 610-623). Association for Computing Machinery. https://doi.org/10.1145/3442188.3445922

Gelman, A., & Loken, E. (2014). The statistical crisis in science. *American Scientist*, 102(6), 460. https://doi.org/10.1511/2014.111.460

Hicks, M. T., Humphries, J., & Slater, J. (2024). ChatGPT is bullshit. *Ethics and Information Technology*, 26(2), 38. https://doi.org/10.1007/s10676-024-09775-5

Lyttelton, T., Massenkoff, M., & Wilmers, N. (2026). *Coding agents in the social sciences*. Anthropic. https://www.anthropic.com/research/coding-agents-social-sciences

Munafò, M. R., Nosek, B. A., Bishop, D. V. M., Button, K. S., Chambers, C. D., Percie du Sert, N., Simonsohn, U., Wagenmakers, E.-J., Ware, J. J., & Ioannidis, J. P. A. (2017). A manifesto for reproducible science. *Nature Human Behaviour*, 1, 0021. https://doi.org/10.1038/s41562-016-0021

Nosek, B. A., Ebersole, C. R., DeHaven, A. C., & Mellor, D. T. (2018). The preregistration revolution. *Proceedings of the National Academy of Sciences*, 115(11), 2600-2606. https://doi.org/10.1073/pnas.1708274114

Peng, R. D. (2011). Reproducible research in computational science. *Science*, 334(6060), 1226-1227. https://doi.org/10.1126/science.1213847

Sandve, G. K., Nekrutenko, A., Taylor, J., & Hovig, E. (2013). Ten simple rules for reproducible computational research. *PLoS Computational Biology*, 9(10), e1003285. https://doi.org/10.1371/journal.pcbi.1003285

Simmons, J. P., Nelson, L. D., & Simonsohn, U. (2011). False-positive psychology: Undisclosed flexibility in data collection and analysis allows presenting anything as significant. *Psychological Science*, 22(11), 1359-1366. https://doi.org/10.1177/0956797611417632

---

**Broşür kimliği.** `008-01-0001`
**Sürüm.** `0.1.0`
**Tarih.** 2026-05-29
**Sözcük sayısı (yaklaşık).** 1180
**Doğrulanmış atıf sayısı.** 9
**Halüsinasyon atıf sayısı.** 0
**Önceki broşür.** [`007-02-0001`](../../007-academic-writing/007-02-0001/tr.md). DOI Disiplini ile APA 7
**Sonraki broşür.** [`009-01-0001`](../../009-ethics-irb/009-01-0001/tr.md). Yapay Zekâ Destekli Araştırmada Etik, Prensipten Davranışa
