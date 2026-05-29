---
title_en: "DergiPark, ULAKBIM TR Dizin, HEAL-Link, and Regional Indexing"
title_tr: "DergiPark, ULAKBIM TR Dizin, HEAL-Link ve Bölgesel İndeksleme"
booklet_id: "002-04-0001"
category: "002-academic-access"
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
ai_contribution_level: "co-drafting"
human_review: "complete"
human_review_date: "2026-05-24"
verified_citations_count: 10
fabricated_citations_count: 0
disclosure_standard: "COPE 2023 + WAME 2023 + ICMJE 2024 + STM 2025 + EU AI Act 2024/1689 Art. 50 + ENAI"
license:
  - "CC-BY-NC-SA-4.0 (prose)"
status: "release"
signature_booklet: true
---

# DergiPark, ULAKBIM TR Dizin, HEAL-Link ve Bölgesel İndeksleme

Bu rehberin önceki kategorisi Claude Code'un kurulumunu ve ilk oturumunu ele almıştı. Şimdi kurulumdan sonra ortaya çıkan ilk gerçek soruya geliyoruz. Türkçe ya da Yunanca yayın yapan bir akademisyen, kaynaklarına nasıl güvenilir biçimde erişir? Bu broşür, rehberin imza ürünüdür. Uluslararası yapay zeka rehberlerinin yapısal olarak boş bıraktığı bir kategoriyi doldurmak için yazıldı. Hedef bir araç tanıtımı değil, bölgesel akademik altyapının haritasını çıkarmak ve bu altyapıyı Claude Code iş akışına bağlamaktır.

## 1. Niçin Bu Kategori Uluslararası Rehberlerde Yok

Yapay zeka destekli akademik iş akışı üzerine yazılmış uluslararası rehberlerin neredeyse tamamı İngilizce literatürü ve İngilizce dünyanın indeksleme altyapısını varsayar. Web of Science, Scopus, Google Scholar, Semantic Scholar. Bu altyapı, dünyanın büyük bir bilim üretimini kapsar ama tamamını kapsamaz. Ortada yapısal bir asimetri var. Bilimsel atıf veri tabanları, İngilizce dışı üretimi sistematik olarak eksik temsil eder. Bu bir görüş değil, ölçülmüş bir olgudur. van Leeuwen ve diğerleri (2001), Science Citation Index'in dil yanlılığını ve bunun ulusal araştırma performansının uluslararası karşılaştırmalarında yarattığı bozulmayı belgelemiştir. Mongeon ve Paul-Hus (2016) ise Web of Science ile Scopus'un dergi kapsamını karşılaştırarak, her iki veri tabanının da belirli dilleri ve disiplinleri ötekine göre daha zayıf kapsadığını ampirik olarak göstermiştir.

Bu asimetrinin pratik sonucu şudur. Türkiye ve Yunanistan'daki bir sosyal bilimci, yalnızca uluslararası veri tabanlarına dayanan bir Claude Code iş akışı kurarsa, kendi dilindeki literatürün önemli bir kısmını göremez. Bir sistematik derleme, bir kuramsal çerçeve, bir doktora tez taraması bu kör nokta yüzünden eksik kalır. Dolayısıyla bölgesel indeksleme altyapısı, gelişmiş bir özellik değil, tutarlı bir iş akışının zorunlu bir bileşenidir. Bu broşür, o bileşenin haritasını ve doldurma protokolünü sunar. Sırasıyla Türkiye altyapısını, Yunanistan altyapısını, erişimin teknik gerçeklerini ve somut bir iş akışını ele alıyoruz.

## 2. DergiPark, Türkiye'nin Dergi Platformu

DergiPark, TÜBİTAK ULAKBİM ev sahipliğinde yürüyen, yüzlerce Türk akademik dergisinin tek bir çatı altında yayımlandığı platformdur (TÜBİTAK ULAKBİM, 2024). Sosyal bilimci için DergiPark'ın en önemli özelliği, Crossref ile entegre olmasıdır. Bu entegrasyon, platformdaki makalelerin Dijital Nesne Tanımlayıcı, yani DOI aldığı anlamına gelir. DOI'nin varlığı, bir makaleye Claude Code üzerinden erişmenin en sağlam yoludur, çünkü DOI bir makalenin değişmeyen, kalıcı adresidir.

Pratikte bu şöyle çalışır. Bir DergiPark makalesinin DOI'sine sahipseniz, Claude Code'a bu DOI üzerinden bibliyografik üst veriyi çektirebilirsiniz. DOI içerik müzakeresi denen mekanizma, bir DOI adresine belirli bir biçim talebiyle gidildiğinde, makalenin künyesini yapılandırılmış olarak döndürür.

```bash
# Bir DOI'nin künyesini BibTeX olarak çek (DergiPark DOI'lerinin de kullandığı Crossref içerik müzakeresi)
curl -LH "Accept: application/x-bibtex" https://doi.org/10.3390/publications7010018
```

Bu komut, doi.org üzerinden Crossref'e gider ve makalenin künyesini BibTeX olarak getirir. Künye geldikten sonra Claude Code, bu kaydı APA 7 biçimine çevirebilir, kasanızdaki bir referans dosyasına ekleyebilir ya da kaynakçanızla tutarlılığını kontrol edebilir. DergiPark'ın Crossref entegrasyonu, Türkçe literatürü uluslararası bibliyografik altyapıya bağlayan köprüdür. Bu köprü olmasaydı, Türkçe kaynaklar her seferinde manuel olarak girilmek zorunda kalırdı.

## 3. ULAKBİM TR Dizin, Kalite Kontrollü Liste

ULAKBİM TR Dizin, Türkiye'nin ulusal atıf dizinidir ve DergiPark'tan farklı bir işlev görür (TÜBİTAK ULAKBİM, 2026). DergiPark bir yayın platformuyken, TR Dizin bir kalite filtresidir. Bir derginin TR Dizin'de yer alması, belirli değerlendirme kriterlerini, yayın etiği, hakemlik süreci ve biçimsel standartları karşıladığı anlamına gelir. Bu ayrım sosyal bilimci için kritiktir, çünkü doktora yeterlik, akademik teşvik ve atama yükselme süreçlerinde TR Dizin'de yer alan dergilerin ağırlığı yüksektir.

Mongeon ve Paul-Hus'un (2016) gösterdiği yapısal kapsam farkı, burada doğrudan pratik bir sonuç doğurur. Sosyal bilim alanında TR Dizin'deki dergilerin önemli bir kısmı Web of Science ya da Scopus'ta yer almaz. Bu, o dergilerin niteliksiz olduğu anlamına gelmez, sadece uluslararası ticari veri tabanlarının kapsama politikasının dışında kaldıkları anlamına gelir. Dolayısıyla bir Türk sosyal bilimci, TR Dizin'i çoğunlukla manuel olarak takip etmek zorunda kalır. Claude Code burada bir filtre rolü üstlenebilir. Bir literatür taraması yaparken, modele "yalnızca TR Dizin kapsamındaki dergileri ayrı bir başlık altında topla" gibi bir yapılandırma talimatı verebilirsiniz. Bu, taramanın çıktısını ulusal değerlendirme süreçlerinin gereksinimlerine göre düzenler.

## 4. YÖK Tez Merkezi, Doktora Tezleri Tabanı

Yükseköğretim Kurulu Tez Merkezi, 1987'den bu yana Türk üniversitelerinde tamamlanan tezlerin merkezi arşividir (YÖK, 2026). Sosyal bilim araştırmacısı için bu arşiv iki nedenle değerlidir. Yayımlanmamış ama hakem süzgecinden geçmiş geniş bir bilgi tabanıdır. Bir doktora tezi, çoğu zaman bir makaleden daha ayrıntılı bir yöntem bölümü ve daha geniş bir literatür taraması içerir. Öte yandan tezler kronolojik olarak erişilebilir olduğundan, Türkiye'deki bir alanın tarihsel gelişimini izlemenin de en iyi yoludur.

Claude Code ile çalışırken Tez Merkezi'nden gelen kayıtlar için tutarlı bir referans biçimi kurmak önemlidir. Tezler DOI taşımadığı için, künye bilgisi manuel olarak girilir. Kasanızda standart bir tez künye şablonu tutmak, sonraki taramalarda tutarlılığı korur. Modele bir tez künyesini verdiğinizde, APA 7 yayımlanmamış doktora tezi biçimine çevirmesini ve referans dosyanıza eklemesini isteyebilirsiniz. Tez Merkezi, uluslararası veri tabanlarının neredeyse hiç kapsamadığı bir kaynak türüdür, dolayısıyla bölgesel iş akışının ayırt edici bir parçasıdır.

## 5. HEAL-Link, Yunanistan Akademik Konsorsiyumu

Yunanistan tarafında temel altyapı HEAL-Link'tir, yani Yunan Akademik Kütüphaneler Birliği konsorsiyumudur (HEAL-Link, 2026). HEAL-Link, Yunanistan'daki akademik kurumları ortak bir abonelik çatısı altında toplayarak üye kurumların büyük yayıncıların paketlerine, Springer Nature, Wiley, Elsevier gibi, erişimini sağlar. Yunanistan Avrupa Birliği üyesi olduğu için, konsorsiyum yapısı ve büyük yayıncı anlaşmaları Birlik düzeyindeki açık erişim politikalarıyla uyumlu işler.

Komotini'deki Demokritus Üniversitesi, somut bir örnek sunar. Demokritus'ta görevli ya da bu üniversiteyle ilişkili bir psikoloji araştırmacısı, HEAL-Link üzerinden bir psikoloji makalesine erişmek istediğinde, erişim kurumsal kimlik doğrulaması üzerinden gerçekleşir. Bu kimlik doğrulaması, genellikle EZproxy adı verilen bir aracı sistem üzerinden yürür. EZproxy, kullanıcının kurumsal hesabını yayıncının erişim kontrolüne bağlar, böylece kampüs dışından da abonelikli içeriğe ulaşılabilir.

```text
# EZproxy üzerinden erişimin temel mantığı
Kullanıcı -> Kurumsal giriş (EZproxy) -> Yayıncı erişim kontrolü -> Tam metin
```

Claude Code bu zincirde tam metni doğrudan indirmez, çünkü tam metin erişimi kullanıcının kurumsal kimliğine bağlıdır ve kullanıcı sözleşmesinin sınırları içinde kalmalıdır. Bunun yerine Claude Code, makalenin künyesini, DOI'sini ve erişim adresini düzenler, kullanıcının kendi tarayıcısı üzerinden tam metne ulaşmasını kolaylaştırır.

## 6. EZproxy ve Kurumsal VPN Gerçekleri

Kampüs dışı erişim, hem Türkiye hem Yunanistan'da pratik bir engel olabilir. EZproxy ve kurumsal sanal özel ağlar, kullanıcının kurumsal kimliğini taşıyarak abonelikli kaynaklara erişimi mümkün kılar, ama bu erişimin önemli sınırları vardır. Erişim kuruma ya da makineye değil, kullanıcıya bağlıdır. Bir araştırmacı kurumdan ayrıldığında erişim de sona erer. Buna ek olarak, otomatik toplu indirme çoğu yayıncı sözleşmesinde açıkça yasaktır. Bir Claude Code iş akışı tek bir oturumda yüzlerce makaleyi otomatik indirmeye kalkarsa, kurumun erişimi yayıncı tarafından askıya alınabilir.

Bu nedenle bölgesel iş akışının temel kuralı şudur. Claude Code künye, DOI ve erişim adresi düzeyinde çalışır, tam metin indirme kullanıcının kendi tarayıcısı ve kurumsal kimliği üzerinden, sözleşmenin sınırları içinde yapılır. Bu kural hem etik hem de pratiktir. Erişimi sürdürülebilir kılar ve kurumsal aboneliğin riske girmesini önler.

## 7. TÜBİTAK Akademik Teşvik ile İndeksleme İlişkisi

Türkiye'de akademik teşvik düzenlemesi, bir akademisyenin yıllık üretimini puanlayan ve karşılığında ek ödeme sağlayan bir sistemdir. Bu sistemde bir yayının puanı, yayımlandığı derginin indekslendiği veri tabanına göre değişir. Web of Science'ın belirli dizinlerinde yer alan bir dergi, TR Dizin'de yer alan bir dergiden farklı puanlanır. Bu puanlama, akademisyenin dergi seçimini doğrudan etkiler.

Bu broşür teşvik kurallarının belirli rakamlarını vermez, çünkü düzenleme neredeyse her yıl değişir ve belirli bir yıla bağlı rakam vermek broşürü hızla eskitir. Önemli olan ilkedir. İndeksleme seçimi, bir akademisyen için yalnızca görünürlük değil, somut bir kurumsal değerlendirme sonucu doğurur. Claude Code ile bir literatür taraması ya da bir dergi seçimi yaparken, modele indeksleme bilgisini ayrı bir alan olarak takip ettirmek, akademisyenin bu kurumsal gerçeği iş akışına dahil etmesini sağlar. Bir derginin hangi veri tabanında indekslendiği bilgisi, taramanın çıktısında her zaman görünür tutulmalıdır.

## 8. Örnek İş Akışı, Üç Dilde Literatür Taraması

Bu bölüm, önceki bölümlerin birleştiği yeri gösterir. Bir sosyal anksiyete araştırmacısının, Türkçe, Yunanca ve İngilizce literatürü tek bir tarama içinde toplamak istediğini varsayalım. Geleneksel yaklaşım, üç ayrı arama yapmak ve sonuçları manuel birleştirmektir. Claude Code ile yapılandırılmış yaklaşım, bu üç katmanı tek bir iş akışında düzenler.

Önce kaynak katmanları tanımlanır. İngilizce katman için uluslararası veri tabanları, Türkçe katman için DergiPark ve TR Dizin, Yunanca katman için HEAL-Link aracılığıyla erişilen yayıncı paketleri. Claude Code'un dış araçlara bağlanması, Model Bağlam Protokolü, yani MCP üzerinden yapılır. Bibliyografik bir MCP sunucusu yapılandırıldığında, model arama ve künye çekme işlemlerini bu sunucu üzerinden yürütür.

```json
{
  "mcpServers": {
    "bibliyografik-arama": {
      "command": "<bibliyografik MCP sunucusu>",
      "args": ["--source", "crossref"],
      "env": {}
    }
  }
}
```

Bu yapılandırma bir iskelettir, gerçek sunucu adı kullanıcının tercih ettiği bibliyografik MCP'ye göre değişir. Önemli olan mimaridir. Model, künye düzeyindeki işlemleri yapılandırılmış bir araç üzerinden yapar, tam metin erişimi kullanıcının kurumsal kimliğinde kalır. Tarama tamamlandığında, model üç katmanı tek bir kaynakçada birleştirir, her kaydın hangi katmandan ve hangi indeksten geldiğini ayrı alanlarda tutar. Bu, sosyal anksiyete literatürünün dil sınırlarını aşan bütüncül bir haritasını üretir. Tenopir ve diğerleri (2019), akademisyenlerin makale arama ve okuma davranışlarının uluslararası bir incelemesinde, araştırmacıların erişim sürtünmesine karşı ne kadar duyarlı olduklarını göstermiştir. Yapılandırılmış bir iş akışı, bu sürtünmeyi azaltarak araştırmacının zamanını korur.

## 9. Diller Arası Atıf Değerlendirmeleri

Türkçe ya da Yunanca bir kaynağı İngilizce bir makalede atıflarken, biçimsel ve etik birkaç değerlendirme devreye girer. Biçimsel olarak, APA 7 özgün dildeki başlığı korur ve köşeli parantez içinde İngilizce çevirisini ekler. Bu kural, kaynağın özgün kimliğini korurken İngilizce okura erişilebilirlik sağlar. Claude Code, bir Türkçe kaynağın künyesini bu biçime çevirebilir, ama çevirinin doğruluğu yazarın sorumluluğundadır, çünkü başlık çevirisi alan terminolojisine duyarlıdır.

Etik düzeyde, dil asimetrisi bir görünürlük sorununu da beraberinde getirir. Larivière ve diğerleri (2015), akademik yayıncılığın dijital çağdaki oligopol yapısını göstererek, hangi üretimin görünür olduğunun büyük ölçüde ticari altyapı tarafından belirlendiğini ortaya koymuştur. Bu yapı içinde, Türkçe ya da Yunanca bir kaynağı İngilizce bir makalede atıflamak, yalnızca biçimsel bir işlem değil, görünmeyen üretimi görünür kılan bir tercihtir. Bölgesel literatürü uluslararası tartışmaya taşımak, bu broşürün altyapısal hedefiyle aynı doğrultudadır.

## 10. Etik Katman, Kullanıcı Sözleşmelerinin Sınırları

Türk ve Yunan kütüphanelerinin ve yayıncı paketlerinin kullanıcı sözleşmeleri, neyin yapılıp neyin yapılamayacağını belirler. Bu sınırlar bir Claude Code iş akışında her zaman gözetilmelidir. Otomatik toplu indirme yasaktır, erişim kişiseldir ve devredilemez, abonelikli içerik konsorsiyum dışına aktarılamaz. Bu kurallar, erişimin sürdürülebilirliğini korur.

Bir başka etik katman, kaynak kalitesidir. Demir (2018), yağmacı dergilerde kimlerin ve niçin yayımladığını Türkiye perspektifinden inceleyerek, kalite kontrolünün sosyal bilim için ne kadar kritik olduğunu göstermiştir. Bu broşür belirli dergi adları vermez, çünkü liste hızla değişir ve yanlış bir suçlama ciddi sonuçlar doğurur. Bunun yerine ilke düzeyinde bir koruma önerir. TR Dizin kapsamı, konsorsiyum üyeliği ve kurumsal kütüphane onayı, bir kaynağın güvenilirliği için çok katmanlı bir filtre oluşturur. Açık bilim çerçevesi, bu filtreyi tamamlar. UNESCO'nun (2021) açık bilim tavsiyesi, erişim, kalite ve hakkaniyet ilkelerini bir arada ele alan uluslararası bir politika zemini sunar.

## 11. Köprü, Hafıza Sistemine

Akademik erişim altyapısını kurduktan sonra, gelen belgeleri uzun ömürlü bir bellek sisteminde tutmak ikinci kritik adımdır. Üç dilde toplanmış künyeler, bir doktora tez taraması, bir sistematik derlemenin hammaddesi. Bunların hepsinin bir sonraki oturumda yeniden bulunabilir olması gerekir. Burada bir araç tercihi değil, bir mühendislik kalıbı devreye girer. Bir sonraki kategori, Kasa Olarak Hafıza kalıbını ilkesel temelinden kurar ve gelen her belgenin nasıl kalıcı, geri çağrılabilir bir yapıda tutulacağını gösterir.

## Kaynakça

Demir, S. B. (2018). Predatory journals: Who publishes in them and why. *Journal of Informetrics*, 12(4), 1296-1311. https://doi.org/10.1016/j.joi.2018.10.008

HEAL-Link. (2026). *Hellenic Academic Libraries Link consortium*. https://www.heal-link.gr

Larivière, V., Haustein, S., & Mongeon, P. (2015). The oligopoly of academic publishers in the digital era. *PLOS ONE*, 10(6), e0127502. https://doi.org/10.1371/journal.pone.0127502

Mongeon, P., & Paul-Hus, A. (2016). The journal coverage of Web of Science and Scopus: A comparative analysis. *Scientometrics*, 106(1), 213-228. https://doi.org/10.1007/s11192-015-1765-5

Tenopir, C., Christian, L., & Kaufman, J. (2019). Seeking, reading, and use of scholarly articles: An international study of perceptions and behavior of researchers. *Publications*, 7(1), 18. https://doi.org/10.3390/publications7010018

TÜBİTAK ULAKBİM. (2024). *DergiPark Akademik platform*. https://dergipark.org.tr

TÜBİTAK ULAKBİM. (2026). *TR Dizin dergi değerlendirme kriterleri*. https://trdizin.gov.tr

UNESCO. (2021). *UNESCO recommendation on open science* (SC-PCB-SPP/2021/OS/UROS). https://unesdoc.unesco.org/ark:/48223/pf0000379949

van Leeuwen, T. N., Moed, H. F., Tijssen, R. J. W., Visser, M. S., & van Raan, A. F. J. (2001). Language biases in the coverage of the Science Citation Index and its consequences for international comparisons of national research performance. *Scientometrics*, 51(1), 335-346. https://doi.org/10.1023/A:1010549719484

YÖK. (2026). *Yükseköğretim Kurulu Ulusal Tez Merkezi*. https://tez.yok.gov.tr

---

**Broşür kimliği.** `002-04-0001`
**Sürüm.** `0.1.0`
**Tarih.** 2026-05-24
**Sözcük sayısı (yaklaşık).** 1805 (Türkçe gövde metni, wc ile ölçüldü)
**Doğrulanmış atıf sayısı.** 10
**Halüsinasyon atıf sayısı.** 0
**Önceki broşür.** [`001-01-0003`](../../001-foundations/001-01-0003/tr.md). Kurulum, İlk Oturum, Sağlık Testleri
**Sonraki broşür.** [`003-01-0001`](../../003-memory-system/003-01-0001/tr.md). Kasa Olarak Hafıza, İlkesel Bir Giriş
