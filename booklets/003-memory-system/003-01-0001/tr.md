---
title_en: "Memory as Vault, A First-Principles Introduction"
title_tr: "Kasa Olarak Hafıza, İlkesel Bir Giriş"
booklet_id: "003-01-0001"
category: "003-memory-system"
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
original_concept: true
---

# Kasa Olarak Hafıza, İlkesel Bir Giriş

Önceki kategori, akademik erişim altyapısını kurmuştu. Bu kategori ise erişilen her belgenin nereye gideceği sorusuyla başlar. Bir literatür taraması, bir mülakat transkripti, bir klinik gözlem notu. Bunların hepsi bir yere yazılmalıdır, ama hangi yapıya? Bu broşür, bu sorunun yanıtı olarak Kasa Olarak Hafıza kalıbını sunar. Yazarın özgün katkısı olan bu kalıp, belirli bir araç tavsiyesi değil, araçtan bağımsız bir mühendislik kalıbıdır. Hedef, bir akademisyenin yıllarca biriken bağlamını tek bir kalıcı sistemde nasıl tutacağını ilkesel temelinden kurmaktır.

## 1. Niçin Bir Kasa

İki sosyal bilim örneği, sorunu somutlaştırır. On yıldır pratik yapan bir klinik psikoloğu düşünün. Elinde on yıllık seans notları, vaka formülasyonları, süpervizyon kayıtları, okuduğu yüzlerce makalenin özetleri vardır. Bu birikim, klinik bilgeliğin temelidir, ne var ki dağınık kaldığında erişilemez hale gelir. Komotini ve çevresindeki köylerde on iki yıllık bir saha çalışması yürüten bir araştırmacıyı düşünün. Elinde alan notları, gözlem günlükleri, fotoğraflar, görüşme dökümleri vardır. Bu birikim, on iki yıllık emeğin kendisidir, oysa yapısız kaldığında her yeni proje sıfırdan başlamak zorunda kalır.

Her iki örnekte de sorun aynıdır: bağlam birikiyor, ama bağlama erişmek giderek güçleşiyor. Bir not defteri kronolojiktir, geçmişe doğru kazı yapmayı gerektirir. Bir kasa ise bir arşivdir, yapısaldır ve hatırlamaya değil navigasyona dayanır. Kasa Olarak Hafıza kalıbı, yapay zeka destekli bir çalışma ortamını bir günlük not defterinden kalıcı bir araştırma kasasına taşıyan tasarımdır. Bir günlük defterinde bir bilgiyi bulmak için onu ne zaman yazdığınızı hatırlamanız gerekir. Bir kasada ise o bilginin nereye ait olduğunu bilmeniz yeter. Bu fark, on yıl ölçeğinde, bir araştırmacının üretkenliğini belirleyen farktır.

## 2. Tarihsel Zincir, Memex'ten Zettelkasten'a

Kasa Olarak Hafıza yeni bir tüketim trendi değil, yetmiş yıllık bir entelektüel geleneğin parçasıdır. Bu geleneği bilmek, kalıbın ciddiyetini ve dayanıklılığını kavramak için gereklidir.

Zincirin ilk halkası Vannevar Bush'tur. Bush (1945), The Atlantic'te yayımlanan As We May Think başlıklı denemesinde Memex adını verdiği bir aygıt tasavvur etti. Memex, bir bireyin tüm kitaplarını, kayıtlarını ve iletişimini saklayıp bunlar arasında çağrışımsal izler kuran mekanize bir hafıza uzantısıydı. Bush'un öngörüsü netti: insan zihni çağrışımla çalışır, dolayısıyla bilgi sistemi de çağrışımsal bağlantılara izin vermelidir. İkinci halka Ted Nelson'dur. Nelson (1965), karmaşık, değişen ve belirsiz bilgi için bir dosya yapısı önerdiği makalesinde hipertekst kavramını ilk kez tanımladı. Nelson'un katkısı, metinlerin doğrusal değil ağsal olarak birbirine bağlanabileceği fikriydi.

Üçüncü halka Niklas Luhmann'dır. Luhmann (1992), Zettelkasten adını verdiği fiş kutusu sistemiyle çalıştı. Her fişin atomik bir düşünce taşıdığı, fişlerin birbirine numaralarla bağlandığı bu kağıt veri tabanıyla Luhmann, elli yılı aşkın bir verimlilikle yetmiş kitap ve yüzlerce makale üretti. Zettelkasten'in modern uygulamasını Sönke Ahrens (2017) popülerleştirdi. Ahrens, akıllı not alma tekniğini atomik notlar, bağlantılar ve bir düşünme aracı olarak not sistemi üzerinden yeniden formüle etti. Bush'tan Ahrens'e uzanan bu zincir, Kasa Olarak Hafıza kalıbının entelektüel kökenini oluşturur. Kalıp, bu geleneğin yapay zeka çağındaki devamıdır.

## 3. Beş İlke

Kasa Olarak Hafıza beş ilke üzerine kurulur. Bu ilkeler kalıbın bileşenleridir ve her biri ayrı bir mühendislik kararını temsil eder.

Temelde Markdown vardır: kasanın her belgesi düz metin Markdown biçiminde tutulur. Düz metin hiçbir tescilli yazılıma bağlı değildir, otuz yıl sonra da okunabilir, her araçla açılabilir. Buna ek olarak her belgenin başında frontmatter bulunur. Tarih, tür, etiketler, ilişkili belgeler gibi yapılandırılmış üst veri, belgenin makine tarafından sorgulanabilir olmasını sağlar. Üçüncü ilke dosya ağacıdır: belgeler anlamlı bir klasör hiyerarşisinde tutulur. Bu hiyerarşi rastgele değil, bir mühendislik kararıdır ve bir sonraki broşürün konusunu oluşturur. Bağlantılar dördüncü ilkedir: belgeler birbirine köşeli parantez bağlantılarıyla referans vererek Nelson'un hipertekst fikrini kasada canlandırır. Beşinci ilke, içerik haritaları, yani MOC'tur. Bir içerik haritası, bir konuya giriş kapısıdır ve ilgili belgeleri tek bir yerde toplar.

Bu beş ilkenin önemli bir özelliği var: hepsi değiştirilebilir. Markdown yerine başka bir düz metin biçimi, bir frontmatter şeması yerine başka bir şema, bir klasör mimarisi yerine başka bir mimari seçilebilir. Değişmez olan, ilkelerin kendisi değil, onların altında yatan mantıktır. O mantık bir sonraki bölümün konusudur.

## 4. Memory-as-Vault Mühendislik Kalıbı

Kasa Olarak Hafızanın çekirdek mantığı, dört adımlı bir döngüdür. Input, Store, Retrieve, Present adlarıyla anılan bu dört adım, kalıbın değişmez iskeletidir. Beş ilke bu iskeletin somut bir uygulamasıdır. İskeletin kendisi ise hem araçtan hem uygulamadan bağımsız kalır.

```mermaid
flowchart LR
  A[Input] --> B[Store]
  B --> C[Retrieve]
  C --> D[Present]
  D --> A
```

Input, bilginin kasaya girdiği adımdır. Bir makale künyesi, bir alan notu, bir klinik gözlem. Bu adımda bilgi yakalanır ve düz metne dönüştürülür. Store, bilginin nereye ait olduğunun belirlendiği adımdır. Doğru klasör, doğru frontmatter, doğru bağlantılar. Gelecekteki erişilebilirliği bu adım belirler, çünkü yanlış saklanan bir bilgi bir daha bulunamaz. Retrieve, bilginin geri çağrıldığı adımdır. Bir arama, bir frontmatter sorgusu, bir bağlantı takibi. Kasanın değerini fiilen ortaya çıkaran bu adımdır. Present ise geri çağrılan bilginin yeni bir bağlamda sunulduğu adımdır: bir literatür sentezi, bir argüman taslağı, bir vaka formülasyonu.

Döngünün kritik özelliği, Present adımından Input'a geri beslemedir. Sunulan bilgi çoğu zaman yeni bilgi üretir. Bir sentez yeni bir soru doğurur. O soru kasaya yeni bir girdi olarak döner. Bu geri besleme kasayı canlı tutar. Kasa, yalnızca biriktiren değil, sürekli yeniden düzenlenen ve kendi üzerine düşünen bir sistemdir. Bu özellik, kasayı bir depolama alanından bir düşünme aracına dönüştürür.

Nitekim bu kalıbı bir veri tabanı döngüsünden ayıran şey tam da bu geri besleme halkasında yatar. Bir veri tabanı veriyi alır, saklar, sorgular ve döndürür, ama döndürdüğü veri sistemin kendisini değiştirmez. Kasa Olarak Hafıza ise her Present adımında kendini yeniden şekillendirir. Bir araştırmacı bir sentez ürettiğinde, o sentez kasaya yeni bir atomik not olarak girer, eski notlarla yeni bağlantılar kurar ve ilgili içerik haritalarını günceller. Böylece kasa, bir araştırmacının düşünme tarzının zaman içindeki kaydına dönüşür. Bu özellik, dört adımı bir depolama protokolünden bir araştırma enstrümanına yükseltir. Sosyal bilimci için sonuç açıktır: kasa on yıl boyunca yalnızca büyümez, olgunlaşır.

## 5. Claude Code ile Entegrasyon

Kasa Olarak Hafıza kalıbının yapay zeka çağındaki gücü, bir dil modelinin kasayla doğrudan çalışabilmesinden kaynaklanır. Claude Code, dosya okuma yetkisiyle kasanın içeriğine erişir ve yanıtlarını kasadaki gerçek bağlama dayandırır. Model bir soruya yanıt verirken kasadaki ilgili belgeleri okur, onların içeriğini kullanır, böylece ortaya çıkan yanıt genel bir bilgi değil, kullanıcının kendi birikimine dayalı bir sentez olur.

Bu mekanizmanın teknik temeli, geri çağırma destekli üretimdir. Lewis ve diğerleri (2020), bilgi yoğun doğal dil işleme görevleri için geri çağırma destekli üretim yöntemini tanımladı. Bu yöntemde model, yanıt üretmeden önce bir bilgi tabanından ilgili parçaları çeker ve yanıtını bu parçalara dayandırır. Kasa Olarak Hafıza, bu yöntemin sosyal bilimci için somut bir uygulamasıdır. Kasa, geri çağırma destekli üretimin bilgi tabanıdır.

Burada önemli bir sınır vardır. Kasanın rolü retrieval'dır, planning değil. Model kasadan bilgi çeker ve sunar, ama kasanın kendisi bir karar verme ya da planlama sistemi değildir. Valmeekam ve diğerleri (2023), büyük dil modellerinin planlama yeteneklerini eleştirel biçimde inceleyerek bu modellerin karmaşık çok adımlı planlamada belirgin sınırlar taşıdığını gösterdi. Bu bulgu, kasanın niçin retrieval rolünde kalması gerektiğini açıklar: kasa güvenilir bir bilgi kaynağı olmalıdır, planlama ve karar verme ise araştırmacıda kalmalıdır. Khattab ve diğerleri (2023), bildirimsel dil modeli çağrılarını kendini iyileştiren işlem hatlarına derleyen DSPy çerçevesiyle retrieval ve dil modeli bileşenlerinin nasıl yapılandırılabileceğini gösterdi. Bu çerçeve, Kasa Olarak Hafızanın retrieval bileşeninin teknik olarak nasıl sağlamlaştırılabileceğine somut bir örnektir.

## 6. Geri Çağırma Kalıpları

Bir kasadan bilgi geri çağırmanın birkaç kalıbı vardır ve bunlar giderek artan bir incelik sırasında dizilir. En temel kalıp metin aramasıdır. Bir terim ya da ifade, kasanın tüm belgelerinde aranır. Grep adı verilen klasik araçla yapılan bu arama, bir anahtar kelimenin nerede geçtiğini bulmanın en hızlı yoludur. Bir adım ötede dosya örüntüsü eşlemesi, yani glob yer alır: belirli bir ada ya da konuma uyan dosyalar toplanır, örneğin belirli bir yıla ait tüm günlük dosyaları.

Üçüncü kalıp frontmatter sorgusudur. Belgelerin yapılandırılmış üst verisi sorgulanır, örneğin etiketi belirli bir konu olan ve belirli bir tarihten sonra yazılmış tüm belgeler bir arada görülebilir. Bu sorgu, kasanın yapısal gücünü ortaya çıkarır, çünkü kronolojik kazı yerine yapısal seçim yapar. En gelişmiş kalıp ise anlamsal aramadır. MCP üzerinden bağlanan bir anlamsal arama aracıyla gerçekleştirilen bu arama, bir terimin tam eşleşmesini değil, anlamca yakın belgeleri bulur. Bir araştırmacı kaygı ararken endişe, korku, anksiyete gibi anlamca ilişkili belgeler de gelir. Bu dört kalıp, basit anahtar kelimeden derin anlamsal eşleşmeye uzanan bir yelpaze sunar. Araştırmacı her sorgu için en uygun kalıbı seçer.

## 7. Riskler

Kasa Olarak Hafıza güçlü bir kalıptır, ama risksiz değildir. Üç risk dikkat gerektirir.

Kavramsal yorgunluk bunların ilkidir. Bir kasayı sürekli düzenlemek, etiketlemek, bağlantılamak emek ister. Bu emek kasanın değerini aşarsa kasa bir yüke dönüşür. Azaltma yolu, yapıyı basit tutmaktır. Beş ilke mümkün olan en az sürtünmeyle uygulanmalıdır. Mükemmel düzenli bir kasa şart değildir. Yeterince erişilebilir olması yeter. İkinci risk, araç bağımlılığıdır. Bir araştırmacı kasasını belirli bir yazılıma, örneğin tek bir not uygulamasına bağlarsa, o yazılım değiştiğinde ya da kapandığında kasa risk altına girer. Düz metin Markdown ilkesi tam bu yüzden önemlidir: kasa düz metin olduğu sürece hiçbir tek araca bağlı değildir, herhangi bir editörle açılabilir. En ciddi risk ise klinik veridir. Bir klinik psikoloğun kasasında anonimleştirilmemiş hasta verisi bulunmamalıdır. Bu hem etik hem hukuki bir zorunluluktur. Klinik veri, ancak kimliksizleştirilmiş ve etik kurul onayı çerçevesinde kasaya girebilir. Bu risk, bir sonraki bölümün konusu olan bölgesel hukuk çerçevesini gerekli kılar.

## 8. Türkiye ve Yunanistan Özgüllüğü

Klinik ve insan denek verisi söz konusu olduğunda, Türkiye ve Yunanistan iki farklı ama örtüşen hukuki çerçeve sunar. Türkiye'de 6698 sayılı Kişisel Verilerin Korunması Kanunu, klinik veriyi özel nitelikli kişisel veri olarak ayırır. Kişisel Verileri Koruma Kurumu (2024), kişisel sağlık verilerinin korunmasına ilişkin rehberinde açık rızanın kalitesini ve veri minimizasyonu ilkesini vurgular. Sonuç pratik olarak nettir: Türkiye'de bir klinik psikolog ya da hastane araştırmacısı kasasında anonimleştirilmemiş klinik veri tutmaz ve tutmamalıdır.

Yunanistan, Avrupa Birliği üyesi olduğundan, Genel Veri Koruma Tüzüğü yani GDPR doğrudan uygulanır. Avrupa Veri Koruma Kurulu (2024), araştırmada kişisel verilerin korunmasına ilişkin kılavuzunda araştırma bağlamında veri işlemenin sınırlarını tanımlar. KVKK ile GDPR arasındaki yapısal benzerlik yüksektir, her ikisi de veri minimizasyonu ve amaç sınırlaması ilkelerini paylaşır. Komotini'deki Demokritus Üniversitesi etik kurulunun pratiği, bu çerçevenin somut bir uygulamasıdır. Saha araştırmacısı görüşme dökümlerini kasaya alırken katılımcı kimliklerini kodlarla değiştirir ve kasa böylece hem araştırma için işlevsel hem de hukuki olarak uyumlu kalır.

## 9. Köprü, Kasa Mimarisine

Kasa Olarak Hafızanın dört adımından Store, bir sonraki broşürün konusudur. Bilginin nereye ait olduğu sorusu basit görünür, ama bir mühendislik kararıdır. Yanlış bir klasör mimarisi yıllar içinde gizli bir verimlilik vergisine dönüşür. Doğru bir mimari ise dosya bulmayı kavramsal hatırlamadan yapısal navigasyona taşır. Bir sonraki broşür, klasör disiplinini ve içerik haritası kalıbını kişisel bir tercih olarak değil, bir mühendislik kararı olarak ele alır.

## Kaynakça

Ahrens, S. (2017). *How to take smart notes: One simple technique to boost writing, learning and thinking*. ISBN 978-1542866507

Avrupa Veri Koruma Kurulu. (2024). *Guidelines on the protection of personal data in research*. https://edpb.europa.eu

Bush, V. (1945, Temmuz). As we may think. *The Atlantic Monthly*, 176(1), 101-108.

Engel, G. L. (1977). The need for a new medical model: A challenge for biomedicine. *Science*, 196(4286), 129-136. https://doi.org/10.1126/science.847460

Khattab, O., Singhvi, A., Maheshwari, P., Zhang, Z., Santhanam, K., Vardhamanan, S., Haq, S., Sharma, A., Joshi, T. T., Moazam, H., Miller, H., Zaharia, M., & Potts, C. (2023). DSPy: Compiling declarative language model calls into self-improving pipelines. *arXiv*. https://arxiv.org/abs/2310.03714

Kişisel Verileri Koruma Kurumu. (2024). *Kişisel sağlık verilerinin korunmasına ilişkin rehber*. https://www.kvkk.gov.tr

Lewis, P., Perez, E., Piktus, A., Petroni, F., Karpukhin, V., Goyal, N., Küttler, H., Lewis, M., Yih, W., Rocktäschel, T., Riedel, S., & Kiela, D. (2020). Retrieval-augmented generation for knowledge-intensive NLP tasks. *Advances in Neural Information Processing Systems*, 33, 9459-9474. https://arxiv.org/abs/2005.11401

Luhmann, N. (1992). Kommunikation mit Zettelkästen. In *Universität als Milieu: Kleine Schriften* (s. 53-61). Haux.

Nelson, T. H. (1965). Complex information processing: A file structure for the complex, the changing and the indeterminate. *Proceedings of the 1965 20th National Conference*, 84-100. https://doi.org/10.1145/800197.806036

Valmeekam, K., Marquez, M., Sreedharan, S., & Kambhampati, S. (2023). On the planning abilities of large language models: A critical investigation. *Advances in Neural Information Processing Systems (NeurIPS 2023)*. https://arxiv.org/abs/2305.15771

---

**Broşür kimliği.** `003-01-0001`
**Sürüm.** `0.1.0`
**Tarih.** 2026-05-24
**Sözcük sayısı (yaklaşık).** 1700 (Türkçe gövde metni, wc ile ölçüldü)
**Doğrulanmış atıf sayısı.** 10
**Halüsinasyon atıf sayısı.** 0
**Özgün kavram.** Kasa Olarak Hafıza, yazarın özgün mühendislik kavramıdır.
**Önceki broşür.** [`002-04-0001`](../../002-academic-access/002-04-0001/tr.md). DergiPark, ULAKBIM TR Dizin, HEAL-Link ve Bölgesel İndeksleme
**Sonraki broşür.** [`004-01-0001`](../../004-vault-architecture/004-01-0001/tr.md). Klasör Disiplini ve Maps of Content (MOC) Kalıbı
