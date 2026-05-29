---
title_en: "Installation, First Session, and Sanity Checks"
title_tr: "Kurulum, İlk Oturum, Sağlık Testleri"
booklet_id: "001-01-0003"
category: "001-foundations"
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
verified_citations_count: 6
fabricated_citations_count: 0
disclosure_standard: "COPE 2023 + WAME 2023 + ICMJE 2024 + STM 2025 + EU AI Act 2024/1689 Art. 50 + ENAI"
license:
  - "CC-BY-NC-SA-4.0 (prose)"
status: "release"
---

# Kurulum, İlk Oturum, Sağlık Testleri

Bu broşür, önceki ikisinden farklı bir karakter taşır. İlk iki broşür kavramsaldı: aracın ne olduğunu ve hangi arayüz üzerinden çalıştığını kuruyordu. Bu broşür operasyoneldir. Claude Code'un kurulumunu ve ilk oturumunu, sosyal bilim akademisyeninin gerçekten kontrol edebileceği üç sağlık testi protokolüyle birlikte anlatır. Temel iddia şudur: kurulum, sosyal bilim akademisyeni için teknik bir engel değil, bir yöntemsel filtredir. İlk oturumda neyin doğru yapılandırıldığı, sonraki on iki haftada geri dönüş maliyetini belirler. İyi yazılmış bir kurulum broşürü araştırmacının onlarca saatini kazandırır.

Baştan bir notu zorunlu kılmak gerekir. Komut satırı araçları sık güncellenir. Bu broşür, belirli komutları ezberletmeyi değil, kavramsal kontrolü kurmayı hedefler. Kesin komut sözdizimi için her zaman güncel resmi belge esas alınmalıdır (Anthropic, 2026a). Bir araştırmacı için kalıcı değer, bir komutu ezberlemekte değil, bir kurulumun neden ve nasıl çalıştığını anlamaktadır. Bu yaklaşım bilinçli bir tercihtir.

## 1. Sistem Gereksinimleri

Claude Code üç işletim sistemi ailesinde çalışır: macOS, Linux ve Windows. Her üçünde de ortak gereksinim güncel bir komut satırı ortamı ve bir paket yöneticisidir. macOS ve Linux kullanıcıları için süreç görece doğrudan ilerler, çünkü bu sistemler Unix kabuğuyla birlikte gelir. Windows kullanıcıları için ek bir katman söz konusudur. Claude Code'un dosya sistemine ve terminale tam erişiminin Windows üzerinde en sorunsuz biçimde sağlanması, Windows için Linux alt sistemi (WSL2) üzerinden gerçekleşir. WSL2 kurulumu Windows üzerinde tam bir Ubuntu ortamı açarak aracın beklediği Unix araçlarını sunar (Microsoft, 2026).

Sosyal bilim akademisyeni için pratik kontrol listesi kısadır. Güncel bir işletim sistemi sürümü, en az birkaç gigabayt boş disk alanı (oturum belleği ve kasa dosyaları zamanla büyür), bir de kararlı bir internet bağlantısı. Donanım açısından rahatlatıcı olan şudur: araç ağır bir grafik kartı ya da yüksek işlemci gücü gerektirmez. Hesaplama bulutta yapılır, yerel makine yalnızca bir istemcidir. Bunun pratik sonucu önemlidir. Türkiye ve Yunanistan'daki birçok üniversite makinesi, hatta birkaç yıllık dizüstü bilgisayarlar, aracı sorunsuz çalıştırmaya yeterlidir. Yapılması gereken tek ön kontrol, terminalin açıldığını ve temel bir komuta yanıt verdiğini doğrulamaktır.

## 2. Hesap, Abonelik ve Faturalama

Kurulumdan önce bir hesap gerekir. Anthropic, farklı kullanım düzeyleri için farklı plan seçenekleri sunar. Doğru seçim kullanım hacmine bağlıdır. Yoğun ve sürekli kullanan bir doktora öğrencisi ile ara sıra kullanan bir öğretim üyesi farklı planlardan yararlanır. Bu broşür belirli bir fiyat vermez, çünkü fiyatlandırma yapısı zaman içinde değişir. Bunun yerine bir ilke önerir: başlangıçta en düşük taahhütlü seçenekle başlayın, gerçek kullanım örüntünüzü bir ay boyunca gözlemleyin, ardından planı buna göre ayarlayın.

Akademik bütçe açısından şunu hatırlatmak yerindedir: araç maliyeti, soyut bir abonelik gideri olarak değil, bir araştırma asistanının saatlik ücreti ile karşılaştırılarak değerlendirilmelidir. İki yüz makalelik bir tarama görevinde kazanılan zaman, aylık abonelik bedelini çoğu durumda fazlasıyla karşılar. Kullanım çoğu zaman işlenen metin miktarına göre ölçüldüğünden maliyet, görevin büyüklüğüyle orantılı biçimde artar. Bu yapı, küçük görevlerin neredeyse maliyetsiz, büyük taramaların ise öngörülebilir bir gidere bağlı olması anlamına gelir. Faturalama yapılandırmasında bir kullanım üst sınırı belirlemek, beklenmedik maliyetlerden kaçınmak için sağlıklı bir başlangıç alışkanlığıdır. Bu sınır, ilk haftalarda aracı tedirginlik duymadan denemenizi sağlar.

## 3. CLI Kurulumu Adım Adım

Kurulumun üç yaygın yolu vardır: bir paket yöneticisi üzerinden kurulum, macOS üzerinde Homebrew gibi bir sistem paket yöneticisi ya da doğrudan indirme. Üç yolun da sonucu aynıdır: terminalde çağrılabilir bir komut. Kurulumun ardından kritik adım, bu komutun sistemin arama yolunda (PATH) görünür olmasıdır. Terminal komutu tanımıyorsa sorun neredeyse her zaman PATH yapılandırmasıdır.

Bu broşür kesin kurulum komutunu burada sabitlemez, çünkü araç sürümü sık değişir ve sabitlenmiş bir komut kısa sürede eskime riskini taşır. Güncel ve doğru kurulum komutu resmi belgede tutulur ve oradan alınmalıdır (Anthropic, 2026a). Önerilen başlangıç akışı ve iyi uygulama kalıpları da resmi belgenin ayrı bir bölümünde yer alır (Anthropic, 2026b). Akademisyen için yöntemsel ders nettir: bir aracı kurarken birincil belgeye gitmek, üçüncü taraf bir blogdan kopyalanan eski bir komutu denemekten çok daha güvenlidir. Bu alışkanlık, akademik kaynak disiplininin teknik kuruluma taşınmış halidir.

PATH sorununun pratik belirtisi nettir: komutu çağırdığınızda terminal "komut bulunamadı" yanıtı verir. Çözüm çoğu zaman iki adıma indirgenir: kurulum yolunun kabuk yapılandırma dosyasına eklenmesi ve terminalin yeniden başlatılması. macOS ile Linux kullanıcıları için bu kabuk profil dosyasıdır. Windows WSL2 kullanıcıları için aynı mantık Ubuntu ortamı içinde geçerlidir. İlk oturumda en sık karşılaşılan engel olan bu küçük ayrıntı, bir kez çözüldüğünde bir daha tekrarlamaz. Kurulumun başarılı olduğunun en basit doğrulaması, komutun sürüm bilgisini sorduğunuzda bir sürüm numarası döndürmesidir.

## 4. İlk Login ve İzin Onayı

Kurulumdan sonra ilk oturum bir kimlik doğrulama ile başlar: araç hesabınıza bağlanır. Bu noktadan itibaren kritik kavram izin modelidir. Claude Code, dosya okumak, dosya yazmak ya da komut çalıştırmak gibi işlemleri gerçekleştirmeden önce izin ister. Bu izin mekanizması bir formalite değil, aracın güvenli kullanımının temelidir.

Burada bir an durup bu izin katmanının neden var olduğunu anlamak aydınlatıcıdır. Dil modelleri, insan geri bildirimiyle yönergeleri takip edecek biçimde eğitilir (Ouyang ve diğerleri, 2022). Ne var ki bir yönergeyi takip etmek, her yönergenin güvenli olduğu anlamına gelmez. Anthropic'in modelleri, zarardan kaçınmayı bir ilkeler dizisi üzerinden öğrenen bir hizalama yaklaşımıyla eğitilir (Bai ve diğerleri, 2022). İzin modeli, bu hizalama katmanının kullanıcı tarafındaki tamamlayıcısıdır: model güvenli davranmaya çalışırken kullanıcı da hangi eylemlere izin verdiğini açıkça denetler.

Pratikte bu, her duyarlı eylemden önce bir onay isteminin ekrana gelmesi demektir. Araç ne yapmak istediğini bildirir, siz onaylar ya da reddedersiniz. Sosyal bilim akademisyeni için önerilen başlangıç stratejisi, her eylem için ayrı ayrı onay istemektir. İlk haftalarda bu "her seferinde sor" yaklaşımı, aracın ne yaptığını öğrenmenin en güvenilir yoludur. Güven arttıkça ve örüntü tanındıkça, belirli güvenli işlemler için kalıcı izin verilebilir. Klinik veri ya da kişisel bilgi içeren dizinlere erişim ise hiçbir zaman otomatik onaya bağlanmamalıdır. Sorumlu kullanım çerçevesi bu tür sınırların açıkça çizilmesini gerektirir (Anthropic, 2024).

## 5. Sağlık Testi 1: Dosya Okutma

İlk sağlık testi en basit ama en bilgilendirici olanıdır. Bir metin dosyasını araca okutun: örneğin kasanızdaki bir not dosyasını. Beklenen davranış şudur: araç dosyanın içeriğini okur, size içeriğin bir özetini ya da yapısını raporlar ve hiçbir değişiklik yapmaz. Sağlıklı bir çıktıda araç dosyanın yolunu doğru gösterir, içeriğin gerçekten o dosyadan geldiğini ima eden somut ayrıntılar verir ve okuma işlemi için izin istediğini belli eder. Bu test üç şeyi aynı anda doğrular: aracın dosya sistemine erişimi çalışıyor, izin modeli devreye giriyor ve okuma işlemi yazma işleminden ayrı kalıyor.

Başarısızlık modları öğreticidir. Araç dosyayı bulamıyorsa çalışma dizini yanlış ayarlanmıştır. İzin istemeden okuyorsa izin yapılandırması fazla gevşektir ve sıkılaştırılmalıdır. Dosyayı okumak yerine içeriği uyduruyorsa bu ciddi bir uyarı işaretidir: araç ile gerçek dosya arasındaki bağlantı kurulamamış demektir. Bu son durum özellikle önemlidir, çünkü hayali içerik üretimi akademik bağlamda en tehlikeli başarısızlıktır. Bu ilk testin sağlıklı sonucu araştırmacıya aracın gerçekten yerel dosyalarla çalıştığı güvenini verir. Bu güven, sonraki tüm iş akışlarının temelidir.

## 6. Sağlık Testi 2: Dosya Düzenletme ve Diff Görüntüleme

İkinci test okumadan bir adım ileri gider. Araçtan bir dosyada küçük bir değişiklik yapmasını isteyin: örneğin bir not dosyasına bir başlık eklemesini. Beklenen davranış şudur: araç yapacağı değişikliği önce bir fark (diff) görünümünde gösterir, onayınızı ister ve ancak onayladıktan sonra dosyaya yazar. Diff görünümü akademik üretim için kritik bir denetim aracıdır: neyin değişeceğini değişiklik gerçekleşmeden önce görürsünüz.

Bu testin sağlıklı sonucu araştırmacının her yazma işlemini denetleyebildiğini doğrular. Akademik bir metinde izlenebilirlik vazgeçilmezdir. Bir hakem yanıtında ya da bir manuskript revizyonunda hangi değişikliğin ne zaman yapıldığını görmek zorundasınızdır. Diff görünümüyle çalışmak bu izlenebilirliği oturumun en başından kurar. Araç değişikliği diff göstermeden doğrudan yazıyorsa izin yapılandırması gözden geçirilmelidir, çünkü denetlenemeyen bir yazma akademik bağlamda kabul edilemez. Bu test başarılı olduğunda araç yalnızca bir okuyucu değil, güvenilir bir yazım ortağı haline gelir.

## 7. Sağlık Testi 3: Çok Adımlı Görev

Üçüncü test aracın ajansal niteliğini sınar. Çok adımlı bir görev verin: örneğin bir literatür dosyasını oku, içinden belirli bir kavramın geçtiği bölümleri çıkar, bu çıkarımları ayrı bir özet dosyasına yaz. Bu görev üç işlemi zincirler: okuma, işleme ve yazma. Beklenen davranış, aracın her adımı sırayla yürüterek ne yaptığını raporlaması ve son çıktıyı ayrı bir dosyaya yazmasıdır.

Bu test, önceki broşürde anlatılan eylem döngüsünün pratikte çalışıp çalışmadığını doğrular. Sağlıklı sonuç, aracın görevi tek bir yanıt olarak değil, izlenebilir bir alt görev silsilesi olarak ele almasıdır. Başarısızlık halinde en sık görülen sorun, aracın bir ara adımı atlaması ya da kaynak dosya yerine kendi belleğinden içerik üretmesidir. Dolayısıyla son çıktı her zaman kaynak ile karşılaştırılmalıdır. Bu karşılaştırma adımı akademik disiplinin teknik akışa taşınmış halidir: tıpkı bir alıntının orijinal kaynaktan doğrulanması gibi, aracın ürettiği özet de kaynak dosyaya karşı sınanır. Bu üçüncü test başarılıysa kurulum tamamlanmış, araç akademik üretim için hazır demektir.

## 8. Başarısızlık Modları

İlk oturumda karşılaşılan sorunların çoğu birkaç tipik moda indirgenir. Aşağıdaki tablo her modu sembolü, açıklaması ve çözümüyle birlikte verir.

| Sembol | Açıklama | Çözüm |
|---|---|---|
| Komut bulunamadı | Terminal, kurulan komutu tanımıyor | PATH yapılandırmasını kontrol edin, kabuğu yeniden başlatın |
| Yetki hatası | İzin verilmemiş bir dosya ya da dizine erişim denendi | İzin onayını verin ya da çalışma dizinini düzeltin |
| Ağ hatası | Model çağrısı ağ üzerinden ulaşamadı | Bağlantıyı kontrol edin, gerekirse yeniden deneyin |
| Model zaman aşımı | Yanıt beklenen sürede gelmedi | Görevi daha küçük adımlara bölün, bağlantı kalitesini kontrol edin |
| Bağlam limiti | Oturum, modelin bağlam penceresini aştı | Oturumu özetleyip yeniden başlatın, kalıcı bilgiyi dosyaya yazın |

Bu modların hiçbiri kurulumun başarısız olduğu anlamına gelmez. Hepsi ilk oturumun normal öğrenme eğrisinin parçasıdır. Önemli olan her sembolü tanımak ve uygun çözüme hızlı ulaşmaktır. Bağlam limiti modu özellikle önemlidir, çünkü kalıcı bilgiyi dosyaya yazma alışkanlığını pekiştirir. Bu alışkanlık, rehberin ilerleyen kategorilerinde ele alınan kasa mimarisinin temelidir. Nitekim ilk oturumdaki bir başarısızlık bir engel değil, sonraki haftaların disiplinini kuran öğretici bir andır.

## 9. Türkiye ve Yunanistan Özgüllüğü

Bölgesel gerçekler kurulum sürecinde iki noktada belirir. Biri ödeme yöntemidir. Türkiye'de bazı uluslararası ödeme altyapılarında kısıtlamalar görülebilir. Bu durumda sanal kart, yurt dışı banka kartı ya da kurumsal hesap yapılandırması gibi alternatif yollar devreye girer. Bu broşür yalnızca prosedürü tarif eder, finansal tavsiye vermez. Yunanistan, Avrupa Birliği üyesi olduğu için standart ödeme akışı geçerlidir. Öte yandan bağlantı kalitesi de bir etkendir. Komotini gibi küçük şehirlerde fiber bağlantı her zaman güçlü olmayabilir. Bu durum model zaman aşımı modunun sıklığını artırır. Çözüm, görevleri daha küçük adımlara bölmek ve kararlı bağlantı pencerelerinde çalışmaktır. Bu iki bölgesel ayrıntı, kurulumun salt teknik bir mesele olmadığını, aynı zamanda bir uyum meselesi olduğunu hatırlatır.

## 10. Sonraki Kategori

Bu broşür, kurulumun teknik bir engel değil yöntemsel bir filtre olduğunu ve üç sağlık testinin araştırmacıya aracın gerçekten çalıştığı güvenini verdiğini gösterdi. Kurulum tamamlandıktan sonra akademisyenin önündeki ilk soru, Türkçe ve Yunanca akademik dergilere nasıl güvenilir biçimde erişeceğidir. Bir sonraki kategori akademik erişim altyapısına ayrılmıştır. DergiPark, ULAKBIM TR Dizin ve HEAL-Link gibi bölgesel indeksleme sistemlerine güvenilir erişim, uluslararası rehberlerde bulunmayan ve bu rehberin en yüksek değerli katkılarından biri olan bir konudur. Booklet 002-04-0001 bu noktadan devam eder.

---

## Kaynakça

Atıflar APA 7 biçimindedir. Belge bağlantıları 2026-05-24 tarihinde canlı erişim ile doğrulanmış, akademik atıflar arXiv üzerinden teyit edilmiştir.

Anthropic. (2024). *Responsible scaling policy*. https://www.anthropic.com/news/anthropics-responsible-scaling-policy

Anthropic. (2026a). *Claude Code documentation*. https://docs.claude.com/en/docs/claude-code

Anthropic. (2026b). *Claude Code best practices*. https://code.claude.com/docs/en/best-practices

Bai, Y., Kadavath, S., Kundu, S., Askell, A., Kernion, J., Jones, A., Chen, A., Goldie, A., Mirhoseini, A., McKinnon, C., Chen, C., Olsson, C., Olah, C., Hernandez, D., Drain, D., Ganguli, D., Li, D., Tran-Johnson, E., Perez, E., ... Kaplan, J. (2022). *Constitutional AI: Harmlessness from AI feedback*. arXiv. https://arxiv.org/abs/2212.08073

Microsoft. (2026). *Windows Subsystem for Linux documentation*. https://learn.microsoft.com/windows/wsl/

Ouyang, L., Wu, J., Jiang, X., Almeida, D., Wainwright, C. L., Mishkin, P., Zhang, C., Agarwal, S., Slama, K., Ray, A., Schulman, J., Hilton, J., Kelton, F., Miller, L., Simens, M., Askell, A., Welinder, P., Christiano, P., Leike, J., & Lowe, R. (2022). Training language models to follow instructions with human feedback. In *Advances in Neural Information Processing Systems 35 (NeurIPS 2022)* (pp. 27730-27744). https://arxiv.org/abs/2203.02155

---

**Broşür kimliği.** `001-01-0003`
**Sürüm.** `0.1.0`
**Tarih.** 2026-05-24
**Sözcük sayısı (yaklaşık).** 1800 (Türkçe gövde metni, wc ile ölçüldü)
**Doğrulanmış atıf sayısı.** 6
**Halüsinasyon atıf sayısı.** 0
**Önceki broşür.** [`001-01-0002`](../001-01-0002/tr.md). Aracın Ötesine Geçiş: Sohbet Penceresinden İş Ortağına
**Sonraki broşür.** `002-04-0001`. DergiPark, ULAKBIM TR Dizin, HEAL-Link ve Bölgesel İndeksleme (Faz 2)
