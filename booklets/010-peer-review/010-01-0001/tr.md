---
title_en: "Rebuttal Letters with Traceability Matrices"
title_tr: "İzlenebilirlik Matrisleri ile Hakem Yanıt Mektupları"
booklet_id: "010-01-0001"
category: "010-peer-review"
language: "tr"
version: "0.1.0"
date_published: "2026-05-24"
date_last_revised: "2026-05-24"
authors:
  - name: "Onour Impram"
    orcid: "0000-0003-1076-3928"
    role: "author, principal reviewer"
ai_assisted: true
ai_tools:
  - name: "Claude Code"
    vendor: "Anthropic"
    model_alias: "claude-opus-4-7"
    model_dated: null  # no dated identifier published by Anthropic for Opus 4.7 as of 2026-05-24
    role: "drafting, verification, citation lookup"
    interaction_mode: "interactive console"
ai_contribution_level: "substantial-drafting"
human_review: "complete"
human_review_date: "2026-05-24"
verified_citations_count: 9
fabricated_citations_count: 0
disclosure_standard: "COPE 2023 + WAME 2023 + ICMJE 2024 + STM 2025 + EU AI Act 2024/1689 Art. 50 + ENAI"
license:
  - "CC-BY-NC-SA-4.0 (prose)"
status: "release"
---

# İzlenebilirlik Matrisleri ile Hakem Yanıt Mektupları

Önceki broşür, etik çerçeveyi baştan kurulan bir iş akışı belgesi olarak tanımlamıştı. Bu broşür, o çerçevenin sınandığı en kritik ana geçer. Hakem yanıt mektubu, sosyal bilim araştırmacısının profesyonel üretimindeki en yüksek bahisli metin türüdür. Yapılandırılmamış ve dağınık bir cevap mektubu çoğunlukla ikinci bir redde kapı aralar. Bir izlenebilirlik matrisi ise mektubu yönetilebilir kılar, yanıt kalitesini ve yayın kabul olasılığını birlikte yükseltir. Buradaki hedef, Claude Code ile bu matrisi yarı otomatik kuran ve yapay zeka ifşa etiğini koruyan bir iş akışını göstermektir.

## 1. Hakem Yanıt Mektubunun Yapısı

Hakem yanıt mektubu dört zorunlu bileşen üzerine kuruludur. Editöre yazılan kısa bir açılışla başlar: revizyona teşekkür, ana değişikliklerin özeti ve mektubun yapısının tek cümleyle tanıtımı. Ardından her hakem yorumuna tek tek yanıt verilir: her yorumun hemen altına yazarın yanıtı, ardından makalede yapılan değişikliğin tam konumu gelir. Değişikliklerin makaledeki yeri sayfa ve satır düzeyinde açıkça işaretlenir. Mektup, kalan açık noktaların dürüst bir kabulüyle kapanır.

Bu dört bileşen bir disiplin gerektirir. Provenzale ve Stanley (2006), el yazması değerlendirmenin sistematik kılavuzunda, hakem yorumlarının belirli kategorilere ayrıldığını ortaya koyar: yöntemsel, kavramsal, biçimsel. Yazarın yanıtı, her kategorinin gerektirdiği tona sadık kalmalıdır. Noble (2017), hakemlere yanıt yazmanın on basit kuralını sıralarken en kritik olanını şöyle belirtir: her yoruma açıkça ve ayrı ayrı yanıt vermek. Yorumları gruplamak ya da atlamak, editörde yanıtın eksik olduğu izlenimini yaratır. Belcher (2019), akademik yayın sürecini on iki haftalık bir yapıya oturttuğu rehberinde, revizyonun makalenin kaderini belirleyen aşama olduğunu vurgular.

## 2. İzlenebilirlik Matrisi Nedir

Bir izlenebilirlik matrisi, her hakem yorumunu, ona verilen yanıtı ve makalede yapılan değişikliği tek bir tabloda birbirine bağlayan yapıdır. Matris, yazarın hiçbir yorumu atlamadığını ve her değişikliğin izlenebilir olduğunu kanıtlar. Bir editör, matrise baktığında, hangi yorumun nasıl ele alındığını tek bakışta görür.

Matrisin gerekliliği, hakem değerlendirmesinin kendine özgü ölçeğinden doğar. Bir makale çoğunlukla iki ya da üç hakemden, her birinde beş ila on yorum barındıran değerlendirmeler alır. Bu, on beş ila otuz ayrı yoruma yanıt vermek demektir. Yapılandırılmamış bir mektupta bu yorumların bir kısmı kaçınılmaz olarak gözden kaçar. Matris ise bu kaçışı yapısal olarak olanaksız kılar: her yorum bir satırdır ve her satırın bir yanıtı olmak zorundadır. Squazzoni ve diğerleri (2021), yüz kırk beş dergiyi inceledikleri çalışmalarında, hakem değerlendirme sürecinin yapısal özelliklerinin yayın sonucu üzerinde belirleyici olduğunu gösterir. Dolayısıyla bir izlenebilirlik matrisi, bu yapısal sürece yazarın tarafından getirilen bir düzen aracıdır.

## 3. Claude Code ile Bir Matris Oluşturma

Bir izlenebilirlik matrisi, Claude Code ile yarı otomatik kurulabilir. İş akışı birkaç aşamada ilerler. Hakem raporları önce kasaya düz metin olarak alınır, her yorum hakem kimliği ve yorumun konumuyla birlikte ayrı bir satır olarak çıkarılır. Model bu çıkarma işlemini destekler: uzun bir hakem raporunu ayrı yorumlara böler. Ardından her satıra yazarın yanıtı ve planlanan değişiklik eklenir. Bu içerik yazarın kendi analitik kararıdır. Model yalnızca biçimi düzenler.

Burada kritik bir sınır vardır. Model, matrisin yapısını ve dilbilgisel düzenini destekler. Ne var ki yanıtın özünü yazar üretir. Bir hakem yorumuna ne yanıt verileceği, makalenin bilimsel içeriğine ilişkin bir karardır ve bu karar her zaman araştırmacıya aittir. Hosseini ve diğerleri (2023), bilimsel yayınların yazımında yapay zeka kullanımını ele alırken, aracın metni düzenlemesi ile metnin içeriğini üretmesi arasındaki ayrımın korunması gerektiğini vurgular. İzlenebilirlik matrisinde bu ayrım nettir: biçim modelin desteğiyle, içerik yazarın kalemiyle.

## 4. Yapay Zeka İzinin Etik Tartışması

Yapay zeka ile yazılmış metinlerin izini gizleme tartışması dikkatli bir ayrım gerektirir. Bir araştırmacı, yapay zeka yardımıyla yazdığı bir metni daha doğal görünür kılmak isteyebilir. Burada bir etik sınır vardır ve bu sınır kolayca yanlış okunur. Yapay zeka yardımıyla yazılmış bir metin, yapay zeka tarafından yazılmış bir metin değildir. Bir araştırmacının kendi analizini yapay zeka desteğiyle daha açık ifade etmesi meşrudur. Oysa yapay zekanın ürettiği içeriği kendi üretimi gibi sunması meşru değildir.

Bu ayrım, anti-yapay-zeka-izi yazımının neden karmaşık olduğunu açıklar. Else (2023), yapay zeka tarafından yazılan özetlerin bilim insanlarını yanıltabildiğini gösterdiğinde, sorunun gizleme değil ifşa eksikliği olduğu netleşti. Bir metnin yapay zeka izi taşıyıp taşımaması ikincil bir sorudur. Birincil soru şudur: yapay zeka katkısı ifşa edilmiş mi? Bu broşür, izi gizleme rehberi değildir. Aksine, ifşa zorunluluğunu koruyarak yapay zeka yardımının dürüstçe nasıl belirtileceğini gösterir. Bütünlük, izin görünürlüğünde değil, katkının açıklanmasındadır.

## 5. Örnek Bir R&R'dan Matris Geliştirme

Somut bir örnek, kalıbı netleştirir. Aşağıdaki matris sentetik bir senaryodan türetilmiştir, gerçek bir hakem değerlendirmesinden değil. Bir sosyal kaygı çalışmasının iki hakemden aldığı varsayımsal yorumlar üzerine kuruludur.

| # | Hakem | Yer | Yorum (özet) | Yanıt | Değişiklik | Kategori |
|---|---|---|---|---|---|---|
| 1 | H1 | s.4 s.12 | Örneklem küçük | Sınırlamalara eklendi, güç analizi yapıldı | s.18 s.5-12 | Kabul |
| 2 | H1 | s.7 s.3 | Ölçek geçerliği belirsiz | Cronbach alfa eklendi | s.9 s.15 | Kabul |
| 3 | H1 | s.10 s.20 | Analiz yöntemi gerekçesiz | Yöntem seçimi gerekçelendirildi | s.11 s.1-8 | Kabul |
| 4 | H2 | genel | Kuramsal çerçeve dağınık | Yeni alt bölüm 2.1 yazıldı | s.5-7 | Yeniden yazım |
| 5 | H2 | s.13 s.4 | Bulgular abartılı | İddialar ölçüldü, dil yumuşatıldı | s.13-14 | Kabul |
| 6 | H2 | s.16 s.9 | Sınırlamalar yetersiz | Üç yeni sınırlama eklendi | s.19 s.3-18 | Kabul |
| 7 | H2 | s.2 s.1 | Başlık yanıltıcı | Hakemin önerisi tartışıldı, kısmen uygulandı | s.1 | Kısmi |
| 8 | H1 | s.8 s.5 | Bir kaynak eski | Kaynak güncel literatürle desteklendi | s.8 s.5 | Kabul |

Bu matris, yazarın sekiz yorumun hiçbirini atlamadığını kanıtlar. Her satır, editöre yanıtın izlenebilir bir kaydını sunar. Kategori sütunu, yorumların ne ölçüde kabul edildiğini özetler ve kısmi ya da reddedilen yorumlar için ayrı bir gerekçe gerektiğini işaret eder.

Kategori sütunu aynı zamanda editörün triyaj aracıdır. Bir editör matrise baktığında, kabul edilen yorumların çoğunlukta olduğunu görür ve revizyonun ciddiyetine güvenir. Asıl dikkat, kısmi ve reddedilen satırlara yönelir. Yazarın en özenli gerekçeyi sunması gereken yer burasıdır. Yukarıdaki yedinci satır, başlık önerisinin kısmen uygulandığı bir kısmi kabuldür. Yazar burada, hakemin endişesini neden tam karşılamadığını ve bunun yerine hangi orta yolu bulduğunu açıkça yazmalıdır. Kısmi bir kabul geçiştirilirse ikinci turda yeniden gündeme gelir. Açık bir gerekçeyle sunulursa editör çoğunlukla yazarın tarafını tutar. Matris, bu kritik satırları görünür kılarak yazarın enerjisini en çok ihtiyaç duyulan yere yönlendirir.

## 6. "Hakem Yanlış" Protokolü

Her hakem yorumu doğru ya da uygulanabilir değildir. Bazı yorumlar bir yanlış anlamadan kaynaklanır, bazıları makalenin kapsamı dışındadır, bazıları ise birbiriyle çelişebilir: bir hakem bir değişiklik isterken diğeri tersini talep edebilir. Bu durumlar için yazarın bir protokole ihtiyacı vardır.

Temel kural, hiçbir yorumun reddedilmeden geçiştirilmemesidir. Bir yazar yorumu uygulamayacaksa, bunu açıkça ve gerekçesiyle belirtmelidir. Gerekçe hakeme değil, bilimsel argümana dayanmalıdır. "Hakem yanılıyor" demek yerine, "bu noktada literatür şunu önermektedir" denir. Williams ve Bizup (2016), açıklık ve zarafet üzerine yazım derslerinde bir argümanın gücünün tonunda değil kanıtında olduğunu vurgular. Hakem yanlış olduğunda bile yanıt saygılı ve kanıta dayalı kalır. Editöre yükseltme eşiği şudur: iki hakem birbiriyle çelişiyorsa ya da bir yorum makalenin temel tasarımına aykırıysa, yazar editöre doğrudan bir not yazarak yönlendirme ister. Çatışmayı tek başına çözmeye çalışmak yerine bu yola başvurmak çok daha güvenlidir.

## 7. Editör ile Etkili İletişim

Editör, hakem ile yazar arasındaki hakemdir ve onunla iletişim ayrı bir disiplin gerektirir. Yanıt mektubuna eşlik eden kısa bir editör notu, sürecin akışını kolaylaştırır. Bu not ana değişiklikleri üç ya da dört cümlede özetler, varsa hakemler arası çelişkileri de editörün dikkatine sunar. Editör, ayrıntılı matrisi okumadan önce bu nottan genel bir resim edinir.

Sword (2017), başarılı akademisyenlerin nasıl yazdığını incelediği çalışmasında, akademik iletişimde netliğin ve zamanlamanın önemini gösterir. Editöre yazılan not kısa, açık ve zamanında olmalıdır. Uzun bir savunma değil, bir yol haritası sunar. Editör, yazarın revizyonu ciddiye aldığını ve süreci yönettiğini bu nottan anlar.

## 8. Etik Sınırlar ve İfşa

Yapay zeka yardımının ifşası, hakem yanıt sürecinde de zorunludur. Hangi katkının açıklanacağı, bir sınır tablosuyla netleşir.

| Durum | İfşa |
|---|---|
| Dilbilgisi ve biçim düzenleme | İfşa edilir |
| Matris formatının oluşturulması | İfşa edilir |
| Analitik yanıtın özü | Yazarın üretimi, ifşa gerektirmez çünkü yapay zeka katkısı değil |
| Bilimsel argümanın geliştirilmesi | Yazarın sorumluluğu |
| Kaynak doğrulama | Yapay zeka destekli, ifşa edilir |

Bir yanıt mektubunda yapay zeka kullanımı, bir ifşa cümlesiyle belirtilir. Aşağıdaki örnek, sentetik bir ifşa metnidir.

> Bu yanıt mektubunun yapılandırılmasında bir yapay zeka destekli araç kullanılmıştır. Araç, izlenebilirlik matrisinin formatını ve dilbilgisel düzenlemeyi destekledi. Tüm analitik içerik, hakem yorumlarına yanıtın özü ve eklenen bilimsel argümanlar, yazarlar tarafından kaleme alınmıştır. Yapay zeka kullanımı yazarlık iddiasını oluşturmaz.

Bu ifşa, Yayın Etiği Komitesi ve Uluslararası Tıp Dergisi Editörleri Komitesi'nin yapay zeka pozisyonlarıyla uyumludur. İfşa mektubu zayıflatmaz, aksine yazarın bütünlüğünü gösterir.

## 9. Yanıt Süre Yönetimi

Bir revizyon çoğunlukla bir süre sınırıyla gelir: otuz, altmış ya da doksan gün. Bu süre bir plana bağlanmazsa hızla tükenir. Örnek bir doksan günlük plan şu yapıda kurulur. İlk otuz gün hakem raporlarının okunmasına, izlenebilirlik matrisinin kurulmasına ve büyük yapısal değişikliklerin planlanmasına ayrılır. İkinci otuz gün, değişikliklerin makaleye uygulanması ve yanıt metinlerinin yazılması için kullanılır. Son otuz günde ise matris tamamlanır, makale bütünlük okumasından geçirilir ve editör notu hazırlanır.

Daha kısa süreler için plan orantılı olarak sıkışır. Önemli olan, sürenin bir matrise bağlanmasıdır: matris hem işin kapsamını hem de ilerlemeyi görünür kılar. Yazar, tamamlanmış satır oranına bakarak kalan süreyi gerçekçi biçimde değerlendirebilir.

## 10. Köprü, Sorun Giderme Protokolüne

Hakem yanıt mektubu hazırlanırken Claude Code akarken işler ters gidebilir. Bir komut beklenmedik bir sonuç verebilir, bir dosya bozulabilir, bir model yanıtı bağlam sınırına takılabilir. Bir sonraki ve son broşür, sorun giderme protokolünü ele alır. İşler ters gittiğinde sistematik olarak ne yapılacağını, bir araştırmacının panik yerine bir yöntemle nasıl ilerleyeceğini gösterir.

## Kaynakça

Belcher, W. L. (2019). *Writing your journal article in twelve weeks: A guide to academic publishing success* (2nd ed.). University of Chicago Press. ISBN 978-0-226-49991-8

Else, H. (2023). Abstracts written by ChatGPT fool scientists. *Nature*, 613(7944), 423. https://doi.org/10.1038/d41586-023-00056-7

Hosseini, M., Rasmussen, L. M., & Resnik, D. B. (2023). Using AI to write scholarly publications. *Accountability in Research*, 30(7-8), 1-9. https://doi.org/10.1080/08989621.2023.2168535

Noble, W. S. (2017). Ten simple rules for writing a response to reviewers. *PLOS Computational Biology*, 13(10), e1005730. https://doi.org/10.1371/journal.pcbi.1005730

Provenzale, J. M., & Stanley, R. J. (2006). A systematic guide to reviewing a manuscript. *American Journal of Roentgenology*, 186(3), 848-854. https://doi.org/10.2214/AJR.05.0782

Resnik, D. B. (2018). *The ethics of research with human subjects: Protecting people, advancing science, promoting trust*. Springer. https://doi.org/10.1007/978-3-319-68756-8

Squazzoni, F., Bravo, G., Farjam, M., Marusic, A., Mehmani, B., Willis, M., Birukou, A., Dondio, P., & Grimaldo, F. (2021). Peer review and gender bias: A study on 145 scholarly journals. *Science Advances*, 7(2), eabd0299. https://doi.org/10.1126/sciadv.abd0299

Sword, H. (2017). *Air & light & time & space: How successful academics write*. Harvard University Press. ISBN 978-0-674-73770-9

Williams, J. M., & Bizup, J. (2016). *Style: Lessons in clarity and grace* (12th ed.). Pearson. ISBN 978-0-13-408041-3

---

**Broşür kimliği.** `010-01-0001`
**Sürüm.** `0.1.0`
**Tarih.** 2026-05-24
**Sözcük sayısı (yaklaşık).** 1585 (Türkçe gövde metni, wc ile ölçüldü)
**Doğrulanmış atıf sayısı.** 9
**Halüsinasyon atıf sayısı.** 0
**Önceki broşür.** [`009-01-0001`](../../009-ethics-irb/009-01-0001/tr.md). Yapay Zekâ Destekli Araştırmada Etik, Prensipten Davranışa
**Sonraki broşür.** [`012-01-0001`](../../012-troubleshooting/012-01-0001/tr.md). İşler Ters Gittiğinde, Çalışan Bir Sorun Giderme Protokolü
