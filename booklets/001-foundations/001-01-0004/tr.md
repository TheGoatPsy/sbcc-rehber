---
title_en: "CLAUDE.md and the Discipline of Standing Instructions"
title_tr: "CLAUDE.md ve Kalıcı Talimat Disiplini"
booklet_id: "001-01-0004"
category: "001-foundations"
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
ai_contribution_level: "full-draft"
human_review: "complete"
human_review_date: "2026-05-29"
verified_citations_count: 8
fabricated_citations_count: 0
disclosure_standard: "COPE 2023 + WAME 2023 + ICMJE 2024 + STM 2025 + EU AI Act 2024/1689 Art. 50 + ENAI"
license:
  - "CC-BY-NC-SA-4.0 (prose)"
status: "release"
---

# CLAUDE.md ve Kalıcı Talimat Disiplini

Bu rehberin ilk üç broşürü sırasıyla üç soruyu yanıtladı. Claude Code nedir, sohbet penceresinden neden farklıdır, güvenli biçimde nasıl kurulur. Kurulum tamamlandığında araştırmacının önünde duran ilk kalıcı karar teknik değil yöntemseldir. Araca her oturumun başında neyi hatırlatacağını nasıl yazarsınız. Bu kararın somut yeri `CLAUDE.md` dosyasıdır. Bu broşür `CLAUDE.md`'yi bir kolaylık ayarı olarak değil, akademik üretimi biçimlendiren bir yöntem aracı olarak ele alır.

## 1. Talimat neden bir yöntem aracıdır

Sohbet penceresinde her oturum sıfırdan başlar. Önceki oturumda hangi üslubu istediğinizi, hangi atıf kuralına bağlı olduğunuzu, hangi etik sınırı koyduğunuzu araç hatırlamaz. Agent arabiriminde ise kalıcı bir bağlam dosyası bu boşluğu kapatır. Araç oturumun başında bu dosyayı okur, kim için, hangi standartlarla, hangi sınırlar içinde çalıştığını öğrenir.

Sosyal bilimci için bu farkın anlamı açıktır. Talimat dosyası, üslubun, atıf disiplininin, etik sınırların ve yöntemsel tercihlerin tek ve denetlenebilir kaynağı olur. Bir manuscript üzerinde çalışırken her seferinde APA 7 istediğinizi yeniden yazmak yerine, bu beklentiyi bir kez yazıp sabitlersiniz. Talimatı yazmak, araştırmacının kendi standardını dışsallaştırması ve onu makinenin okuyabileceği bir biçime çevirmesidir. Kişisel bir alışkanlığı kuruma dönüştürmenin küçük ama belirleyici adımı budur.

## 2. CLAUDE.md nedir, aracın kalıcı bağlamı

`CLAUDE.md`, agent'ın her oturumun başında otomatik olarak okuduğu, proje köküne yerleştirilen sade bir markdown dosyasıdır. İçeriği özgürdür. Araştırmacının kim olduğu, projenin amacı, beklenen üslup, atıf kuralları, dosya düzeni alışkanlıkları ve geçilemez sınırlar bu dosyada düz cümlelerle ifade edilir. Dosya üç katmanda çalışabilir: bilgisayar genelinde geçerli bir küresel katman, tek bir projeye özgü bir proje katmanı ve gerektiğinde belirli bir alt dizine özgü bir katman.

Sohbet penceresine yazılan bir talimattan bu dosyayı ayıran üç temel özellik vardır. İlki kalıcılıktır. Sohbet talimatı pencere kapanınca kaybolur, `CLAUDE.md` ise diskte yaşar. İkincisi sürüm kontrolüdür. Dosya bir depo içinde tutulduğunda, talimatın zaman içinde nasıl evrildiği izlenebilir. Üçüncüsü paylaşılabilirliktir. Aynı dosya bir ekip, bir laboratuvar ya da bir tez danışmanlığı ilişkisi içinde ortak standart hâline gelir. Bu üç özellik talimatı geçici bir istekten kalıcı bir yöntemsel altyapıya dönüştürür.

## 3. Komut duyarlılığı ve disiplinin gerekçesi

Talimatı dikkatle yazmak için iyi bir gerekçe vardır. Dil modelleri, komutun küçük biçim değişikliklerine şaşırtıcı ölçüde duyarlıdır. Sclar ve diğerleri (2023), yalnızca biçimlendirmedeki ufak değişikliklerin, araya konan bir boşluğun ya da bir ayracın, few-shot ayarında test edilen açık kaynak modellerde doğrulukta büyük farklara yol açabildiğini gösterdi. Aynı içerik farklı biçimde sunulduğunda farklı sonuç verebilir.

Bu bulgunun sosyal bilimci için sonucu doğrudandır. Tekrarlanabilirlik, komutun kararlılığına bağlıdır. Talimat her oturumda gelişigüzel ve sözlü olarak verilirse, sonuçların aynı kalacağının güvencesi yoktur. Oysa talimat yazılı, sürümlenmiş ve sınanmış olduğunda bu duyarlılık kontrol altına alınır. Komut akademik yöntemin bir parçası olarak ele alındığında biçimi de yöntemin bir parçası olur. Dağınık ve sözlü komut, kalibre edilmemiş bir ölçüm aletine benzer. Sabit ve yazılı talimat ise kalibre edilmişine.

## 4. Komut kalıplarından kalıcı yapılandırmaya

Prompt mühendisliği artık dağınık bir hüner değil, taranmış bir alandır. White ve diğerleri (2023), tekrar tekrar işe yarayan komut kalıplarını bir katalog hâlinde derleyip bu kalıpların yeniden kullanılabilir olduğunu gösterdi. Schulhoff ve diğerleri (2024) ise alanın tekniklerini sistematik bir derlemede topladı. Bu çalışmalar, iyi komutun rastlantı değil belgelenebilir bir uygulama olduğunu ortaya koyar.

Ne var ki tek tek komut kalıplarının ötesinde daha sağlam bir fikir vardır: kalıcı yapılandırma. Burada Knuth'un (1984) literate programming kavramı öğreticidir. Knuth, kodun yalnızca makinenin çalıştırması için değil, asıl insanın okuması için yazılması gerektiğini savunarak programı insana anlatılan bir metin gibi düzenlemeyi önerdi. `CLAUDE.md` aynı ruhu taşır. Aracın davranışını, sonraki araştırmacının ve gelecekteki kendinizin okuyup anlayabileceği düz bir dille belgeler. İyi bir `CLAUDE.md`, makineye devredilen bir komut yığını değil, bir çalışma standardının insan tarafından okunabilen ifadesidir.

## 5. Tekrarlanabilirlik altyapısı olarak CLAUDE.md

Sandve ve diğerleri (2013), tekrarlanabilir hesaplamalı araştırma için on basit kural sıraladı. Bu kurallar boyunca tekrar eden bir buyruk öne çıkar: sürecin her adımı kaydedilmeli ve mümkün olduğunca otomatikleştirilmelidir ki başkası, ya da aylar sonra aynı araştırmacı, aynı sonucu yeniden üretebilsin. `CLAUDE.md` bu ilkeyi yapay zekâ destekli iş akışına taşıyan somut bir araçtır.

Hangi modelin, hangi talimatla ve hangi sınırlar içinde çalıştığı tek bir dosyada sabitlendiğinde, çalışmanın yapay zekâ bileşeni belgelenmiş olur. Bir yıl sonra aynı `CLAUDE.md`, aynı davranışı yeniden üretmenin başlangıç noktasıdır. Dolayısıyla bu dosya, yapay zekâ destekli araştırmanın en kırılgan yönlerinden birine, sürecin tekrar edilemezliğine doğrudan yanıt verir. Talimat dosyası, bir makalenin yöntem bölümünün makineye bakan yüzüdür. Yöntem bölümü insan okuruna ne yaptığınızı anlatır. `CLAUDE.md` araca aynı şeyi söyler.

## 6. Sosyal bilimci için CLAUDE.md'de ne bulunmalı

İyi bir talimat dosyası soyut değil somuttur. Sosyal bilimci için en az altı başlık değerlidir. Kimlik ve uzmanlık bunların ilkidir. Araç, kiminle çalıştığını ve hangi düzeyde bir muhatap beklendiğini bilmelidir. Üslup ikinci sıradadır. Tire ve noktalı virgül kullanımı, emoji yasağı, dilin tonu gibi tercihler yazıya dökülmelidir. Atıf disiplini ise üçüncüsüdür. APA 7 beklentisi, uydurma atıf yasağı ve her DOI'nin doğrulanması gerektiği açıkça belirtilmelidir.

Dördüncü başlık etik sınırlardır. Klinik ve kişisel verinin anonimleştirilmesi, KVKK ve GDPR yükümlülükleri ve paylaşılan belgelere kimlik bilgisi yazılmaması gibi kurallar dosyada yer almalıdır. Beşincisi dil katmanıdır. İki dilli çalışan bir araştırmacı, hangi durumda Türkçe hangi durumda İngilizce yanıt beklediğini tanımlayabilir. Altıncısı doğrulama beklentisidir. Aracın bir işi tamamlandı saymadan önce neyi kanıtlaması gerektiği yazılmalıdır. Bu altı başlığın her biri, önceki broşürlerin soyut ilkesini araç düzeyinde somut bir davranışa çevirir.

## 7. Sınırlar, talimat davranışı biçimlendirir ama doğruluğu garanti etmez

İyi yazılmış bir `CLAUDE.md` güçlü bir araçtır, ama iki sınır açıkça adlandırılmadan kullanılırsa araştırmacıyı yanıltır. Bunların ilki modelin olasılıksal doğasıdır. Talimat ne kadar özenli olursa olsun, model hâlâ istatistiksel bir sistemdir. Talimat hata oranını düşürür ama sıfırlamaz. Anlamadan istatistiksel örüntü üretme riski, en titiz talimatla bile sürer (Bender ve diğerleri, 2021). Üretilen metin, epistemik düzeyde hakikate kayıtsız bir karakter taşıyabilir, yani doğru görünmek ile doğru olmak arasındaki farkı kendiliğinden gözetmez (Hicks ve diğerleri, 2024). Bu nedenle talimat, doğrulama disiplininin yerini almaz, onu tamamlar.

İkinci sınır daha incedir. Talimat, zihinsel yükü dışarı verir. Risko ve Gilbert (2016), zihinsel boşaltmanın hem fayda hem maliyet taşıdığını gösterdi. Dışarı verilen şey hatırlama yükü olduğunda kazanç açıktır, ama dışarı verilen şey muhakemenin kendisi olduğunda kayıp gizlidir. Buradan hareketle, `CLAUDE.md`'nin dışsallaştırması gereken tekrar eden yordamdır: hangi üslubun istendiği, hangi biçimin beklendiği gibi. Dışsallaştırılmaması gereken ise bilimsel yargıdır. Bir bulgunun anlamı, bir yorumun geçerliliği, bir etik kararın ağırlığı araştırmacıda kalmalıdır. Talimat yordamı devreder, yargıyı değil.

## 8. Türkçe ve Batı Trakya Özgülü

Talimat disiplini, iki dilli ve bölgesel bağlamda ayrı bir değer kazanır. Tek bir `CLAUDE.md`, hem Türkçe hem İngilizce çalışan bir araştırmacı için ortak bağlam olabilir. Dosya hangi durumda hangi dilin beklendiğini, ve Türkçe diakritik harflerin ASCII'ye düşürülmemesi gibi bir inceliği bir kez tanımlar, böylece iki dil arasında gidip gelen bir akademisyen için sürekli yeniden açıklama yükü ortadan kalkar.

Bölgesel terimler de talimatın konusudur. DergiPark, ULAKBIM TR Dizin ve HEAL-Link gibi bölgesel altyapılar ve Komotini gibi yer adlarının tercih edilen yazımı dosyada sabitlenebilir. Batı Trakya azınlık bağlamında çalışan bir araştırmacı için terimlerin doğru ve tutarlı kullanımı yalnızca biçimsel değil, kimliğe ilişkin bir meseledir. `CLAUDE.md` bu tutarlılığı kişisel bir tercih olmaktan çıkarıp belgelenmiş bir standarda dönüştürür.

## 9. Bir sonraki broşür

`CLAUDE.md`, araca her oturumda ne yapacağını söyler. Ama bu talimatların uygulandığı çalışmanın kendisi, ara sonuçları ve birikmiş kararları nerede yaşar. Talimat davranışı biçimlendirir, belleği değil. Bir sonraki broşür kalıcı belleğin mimarisini ele alır. Kasa Olarak Hafıza, yılları aşan akademik bağlamın nasıl korunacağını ilkesel olarak gösterir. Broşür 003-01-0001 buradan devam eder.

---

## Kaynakça

Atıflar APA 7 biçimindedir. Her DOI ve tanımlayıcı, 2026-05-29 tarihinde Crossref, arXiv veya yayıncı sayfası üzerinden bağımsız olarak doğrulanmıştır.

Bender, E. M., Gebru, T., McMillan-Major, A., & Shmitchell, S. (2021). On the dangers of stochastic parrots: Can language models be too big? In *Proceedings of the 2021 ACM Conference on Fairness, Accountability, and Transparency (FAccT '21)* (pp. 610-623). Association for Computing Machinery. https://doi.org/10.1145/3442188.3445922

Hicks, M. T., Humphries, J., & Slater, J. (2024). ChatGPT is bullshit. *Ethics and Information Technology*, 26(2), 38. https://doi.org/10.1007/s10676-024-09775-5

Knuth, D. E. (1984). Literate programming. *The Computer Journal*, 27(2), 97-111. https://doi.org/10.1093/comjnl/27.2.97

Risko, E. F., & Gilbert, S. J. (2016). Cognitive offloading. *Trends in Cognitive Sciences*, 20(9), 676-688. https://doi.org/10.1016/j.tics.2016.07.002

Sandve, G. K., Nekrutenko, A., Taylor, J., & Hovig, E. (2013). Ten simple rules for reproducible computational research. *PLoS Computational Biology*, 9(10), e1003285. https://doi.org/10.1371/journal.pcbi.1003285

Schulhoff, S., Ilie, M., Balepur, N., Kahadze, K., Liu, A., Si, C., et al. (2024). The prompt report: A systematic survey of prompt engineering techniques. *arXiv*. https://arxiv.org/abs/2406.06608

Sclar, M., Choi, Y., Tsvetkov, Y., & Suhr, A. (2023). Quantifying language models' sensitivity to spurious features in prompt design, or: How I learned to start worrying about prompt formatting. *arXiv*. https://arxiv.org/abs/2310.11324

White, J., Fu, Q., Hays, S., Sandborn, M., Olea, C., Gilbert, H., Elnashar, A., Spencer-Smith, J., & Schmidt, D. C. (2023). A prompt pattern catalog to enhance prompt engineering with ChatGPT. *arXiv*. https://arxiv.org/abs/2302.11382

---

**Broşür kimliği.** `001-01-0004`
**Sürüm.** `0.1.0`
**Tarih.** 2026-05-29
**Sözcük sayısı (yaklaşık).** 1189
**Doğrulanmış atıf sayısı.** 8
**Halüsinasyon atıf sayısı.** 0
**Önceki broşür.** [`001-01-0003`](../001-01-0003/tr.md). Kurulum, İlk Oturum, Sağlık Testleri
**Sonraki broşür.** [`003-01-0001`](../../003-memory-system/003-01-0001/tr.md). Kasa Olarak Hafıza, İlkesel Bir Giriş
