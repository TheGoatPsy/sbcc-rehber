---
title_en: "When Things Go Wrong, A Working Troubleshooting Protocol"
title_tr: "İşler Ters Gittiğinde, Çalışan Bir Sorun Giderme Protokolü"
booklet_id: "012-01-0001"
category: "012-troubleshooting"
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
verified_citations_count: 7
fabricated_citations_count: 0
disclosure_standard: "COPE 2023 + WAME 2023 + ICMJE 2024 + STM 2025 + EU AI Act 2024/1689 Art. 50 + ENAI"
closing_booklet: true
license:
  - "CC-BY-NC-SA-4.0 (prose)"
status: "release"
---

# İşler Ters Gittiğinde, Çalışan Bir Sorun Giderme Protokolü

Önceki broşür, hakem yanıt mektubunu en yüksek bahisli metin türü olarak ele almış, o mektup yazılırken Claude Code akarken işlerin ters gidebileceğini son cümlesinde işaret etmişti. Bu broşür, o işaret edilen ana geçer. Bir komut beklenmedik bir sonuç verdiğinde, bir model yanıtı bağlam sınırına takıldığında, bir atıf bir türlü doğrulanamadığında ya da bir ajan beklenmedik bir karar verdiğinde, sosyal bilim araştırmacısının ihtiyacı bir komut satırı hataları listesi değil, bir muhakeme çerçevesidir. Hata mesajları eskir, sürümler değişir, araçların yüzeyi sürekli kayar. Eskimeyen şey, sorunu daraltan ve kök nedene götüren düşünme biçimidir. Bu kapanış broşürü, o düşünme biçimini yedi adımlı bir protokol olarak sunar ve rehberin bütününü bağlar.

## 1. Sorun Giderme Üç Kategorisi, Araç, Bilgi, İletişim

Bir akademisyenin Claude Code ile çalışırken karşılaştığı sorunların büyük çoğunluğu üç kategoriye ayrılır. Araç sorunları, komut satırının bir hata döndürdüğü, modelin yanıt vermeden zaman aşımına uğradığı, bağlam penceresinin dolduğu durumlardır. Sorunun kökü aracın kendisinde, çalıştığı ortamda ya da ağ bağlantısındadır. Bilgi sorunları daha sessiz bir çeşittir: bir kütüphaneye erişilemez, bir atıf doğrulanamaz, bir DOI bulunamaz, bir kaynağın künyesi eksik kalır. Buradaki mesele verinin erişilebilirliğiyle, doğruluğuyla ilgilidir. İletişim sorunları ise aracın değil, araştırmacı ile araç arasındaki dilin çatladığı yerlerdir: verilen komut model tarafından yanlış anlaşılır, ajan bir döngüde sıkışır ya da beklenmedik bir karar verir.

Bu üçlü ayrım, basit görünse de güçlüdür, çünkü bir sorunu doğru kategoriye yerleştirmek çözümün yarısıdır. Araç sorunu için bakılacak yer, bilgi sorunu için bakılacak yerden farklıdır. Reason (2000), insan hatasının modellenmesi üzerine yazdığı kısa ama etkili makalesinde, hataların bireysel kusurlardan çok sistemin yapısal katmanlarından doğduğunu gösterir. Bir hatayı kişisel beceriksizlik olarak değil, bir sistem katmanının açığı olarak görmek, sorun gidermenin ilk zihinsel sıçramasıdır. Üç kategori, bu katmanları okumanın haritasıdır. Çoğu durumda bir sorun tek bir kategoriye temiz biçimde oturur. Oturmadığında bile üç kategoriyi sırayla sormak araştırmacıyı doğru sorulara götürür.

Ne var ki üç kategoriye temiz oturmayan bir dördüncü durum vardır: belirsiz durum. Bir sorun ilk bakışta hangi katmandan geldiğini ele vermez. Model boş bir yanıt döndürür, ama bunun nedeni ağ kesintisi mi, erişilemeyen bir kaynak mı, yoksa yanlış anlaşılmış bir komut mu belli değildir. Belirsiz durumda doğru hamle, kategori tahmin etmeye çalışmak değil, üç kategoriyi en ucuz testten en pahalıya doğru sırayla elemektir. Önce araç katmanı sınanır, çünkü bir hata mesajı en hızlı okunan kanıttır. Sonra bilgi katmanı, kaynağın gerçekten erişilebilir olup olmadığı. En son iletişim katmanı, çünkü komutu yeniden yazmak en çok emek isteyen adımdır. Belirsizlik bir kategori değil, henüz daraltılmamış bir sorundur. Daraltma ise protokolün beşinci adımının işidir.

## 2. Araç Sorunları, CLI Hatası, Model Zaman Aşımı, Bağlam Limiti

Araç sorunları en görünür kategoridir, çünkü çoğunlukla açık bir hata mesajıyla gelir. Komut satırı bir hata kodu döndürür, ekrana bir uyarı düşer, bir işlem yarıda kesilir. Burada ilk refleks, hata mesajını okumaktır. Bu basit görünen adım sıklıkla atlanır. Bir akademisyen, geliştirici olmadığı için hata mesajını teknik gürültü olarak algılayıp gözünü kaçırabilir. Oysa hata mesajı çoğunlukla sorunun kategorisini ve yerini doğrudan söyler. Mesajı yavaşça okuyarak içindeki dosya adını, satır numarasını ya da durum kodunu fark etmek, çözümün başlangıcıdır.

En sık karşılaşılan üç araç sorunu şunlardır. Model zaman aşımı, modelin yanıt üretmeden önce ayrılan sürenin dolmasıdır. En yaygın nedeni fazla büyük bir girdi ya da geçici bir ağ yavaşlamasıdır ve girdiyi küçülterek, isteği bölerek ya da kısa bir süre sonra yeniden deneyerek çözülür. Bağlam limiti, modele verilen toplam metnin pencereyi aşmasıdır: uzun bir oturumda biriken konuşma bağlamı sessizce büyür, bir noktada model en eski kısımları unutmaya başlar. Çözüm, oturumu özetleyip yeniden başlatmak ya da bağlamı kasaya yazıp temiz bir oturumla devam etmektir. Üçüncü broşürde anlatılan kasa olarak hafıza ilkesinin pratik karşılığı tam da budur: bağlam pencereye değil diske bağlandığında, limit bir engel olmaktan çıkar. Üçüncü sorun ortam yapılandırmasıdır: yanlış bir dizinde çalışmak, eksik bir bağımlılık, hatalı bir yol tanımı. Norman (2013), gündelik nesnelerin tasarımı üzerine yazdığı eserinde, kullanıcı hatası dediğimiz şeyin çoğunlukla tasarım hatası olduğunu gösterir. Araç sorunuyla karşılaşan araştırmacı, kendini suçlamak yerine aracın hangi varsayımının karşılanmadığını sormalıdır. Bu soru, suçlamadan her zaman daha üretkendir.

Somut bir araç sorunu örneği kalıbı netleştirir. Bir araştırmacı, yüz sayfalık bir tez bölümünü tek bir oturumda modele okutmaya çalışır ve model yarıda durup bir bağlam hatası döndürür. İlk refleks aracı suçlamak olabilir. Oysa hata mesajı sorunu açıkça söyler, girdi pencereyi aşmıştır. Çözüm aracı değiştirmek değil, işi bölmektir. Bölüm önce kasaya kaydedilir, sonra alt başlıklarına ayrılır ve her alt başlık ayrı bir oturumda işlenir. Bağlam diske bağlandığında, limit bir duvar olmaktan çıkıp bir iş akışı kararına dönüşür. Bu örnek, araç sorunlarının çoğunun aracın bir kusuru değil, bir varsayımının karşılanmaması olduğunu gösterir.

## 3. Bilgi Sorunları, Kütüphane Erişimi, Atıf, DOI Bulunamıyor

Bilgi sorunları araç sorunlarından daha sessizdir, çünkü bir hata mesajıyla gelmezler. Bir kütüphaneye erişim engellendiğinde, abonelik kapısı sessizce devreye girer ve model boş bir sonuç döndürür. Bir DOI bulunamadığında, atıf doğrulama akışı sonuç vermeden durur. Bu sorunların asıl tehlikesi görünmez olmalarıdır: araç sorunu çığlık atar, bilgi sorunu fısıldar. Dolayısıyla bilgi sorunlarına karşı en güçlü savunma, yedinci broşürde anlatılan atıf doğrulama disiplinidir. Üç dizinli üçgenleme, bir kaynağın tek bir veri tabanında bulunamamasının onun var olmadığı anlamına gelmediğini kabul eder.

Bir DOI bulunamadığında üç olasılık söz konusudur. DOI gerçekten yoktur, çünkü kaynak bir kitap ya da DOI atanmamış eski bir makaledir: bu durumda kaynak DOI olmadan, ISBN ya da kararlı bir URL ile künyelenir. Ya DOI vardır ama yazımda bir hata olmuştur, bir basamak eksik ya da fazladır: bu durumda DOI yeniden, kaynaktan kopyalanarak girilir. Ya da veri tabanı geçici olarak erişilemezdir: bu durumda alternatif bir dizin denenir, Crossref yanıt vermiyorsa OpenAlex, o da yanıt vermiyorsa yayıncının kendi sayfası. Buradaki kritik kural açıktır: bir kaynağı bulunamadığı için uydurmamak gerekir. Bir DOI doğrulanamıyorsa, doğrulanamadığı dürüstçe belirtilir ve kaynak doğrulanana kadar bekletilir. Bilgi sorununda en büyük risk, boşluğu doldurma dürtüsüdür. Bu dürtü, doğrulanmamış bir künyeyi metne sokar ve sorunu araç sorunundan bütünlük sorununa dönüştürür.

Somut bir bilgi sorunu örneği şöyledir. Bir araştırmacı, bir makaleye atıf yapmak ister ama elindeki DOI Crossref'te çözülmez. Boş sonuç, makalenin var olmadığı anlamına gelmez. Önce DOI kaynaktan yeniden kopyalanır, çünkü çoğu hata bir basamağın eksik ya da fazla girilmesinden gelir. Çözülmezse makale başlığıyla alternatif bir dizinde, OpenAlex'te ya da yayıncının sayfasında aranır. Yine bulunamazsa ihtimal, makalenin DOI atanmamış eski bir kaynak olmasıdır. Bu durumda kaynak kararlı bir URL ya da basılı künyeyle atıflanır. Hiçbir aşamada eksik künye uydurulmaz. Bu örnekte sorunun çözümü bir aracı değil, bir disiplini gerektirir: doğrulanana kadar bekletme disiplinini.

## 4. İletişim Sorunları, Komut Anlaşılmaz, Ajan Döngüde, Beklenmedik Karar

İletişim sorunları, üç kategorinin en incesidir. Ne araçta ne veride, araştırmacı ile araç arasındaki dilde yatarlar. İlk tip, komutun yanlış anlaşılmasıdır: araştırmacı bir şey ister, model başka bir şey anlar ve teknik olarak kusursuz ama niyetten uzak bir sonuç üretir. Bunun nedeni çoğunlukla komutun belirsizliğidir. Bir akademisyen, meslektaşına verdiği gibi örtük bir talimat verir ama modelin o örtük bağlamı paylaşmadığını unutur. Komutu daha açık, daha sınırlı ve doğrulanabilir kılmak yanlış anlamayı baştan keser: ne istendiğini, hangi biçimde istendiğini ve başarının nasıl ölçüleceğini açıkça söylemek yeterlidir.

İkinci tip, ajanın bir döngüde sıkışmasıdır. Model aynı adımı tekrar tekrar dener, her seferinde benzer bir sonuçla, ve ilerleme durur. Bu, modelin bir varsayımın yanlış olduğunu fark edemediği durumlarda olur. Döngüyü durdurup temel varsayımı sorgulamak gerekir. Schoenfeld (1985), matematiksel sorun çözme üzerine yaptığı çalışmada, başarılı sorun çözücüleri başarısızlardan ayıran şeyin metabiliş olduğunu gösterir: kişinin kendi düşünme sürecini izleyip bir yolun çıkmaz olduğunu fark ederek geri dönmesi. Ajan döngüde sıkıştığında ihtiyaç duyulan tam da bu metabilişsel müdahaledir, ve onu araştırmacı sağlar. Üçüncü tip, ajanın beklenmedik bir karar vermesidir: model istenmemiş bir dosyayı değiştirir ya da varsayılan bir davranışa kayar. İkinci broşürde anlatılan ajanlık dönüşümünün öbür yüzü budur. Bir araç ne kadar çok karar verebilirse o kadar çok beklenmedik karar verebilir. Çözüm, otonomiyi sınırlamak, kritik aksiyonları onaya bağlamak ve her oturumu açık bir kapsamla başlatmaktır. İletişim sorunları, araştırmacı aracı bir meslektaş gibi değil niyeti açıkça aktarılması gereken bir ortak gibi gördüğünde azalır.

Somut bir iletişim sorunu örneği döngü tipini gösterir. Bir araştırmacı modelden bir veri dosyasını yeniden biçimlendirmesini ister, ama dosyanın gerçek yapısı modelin varsaydığından farklıdır. Model aynı dönüşümü tekrar tekrar dener, her seferinde aynı hatayla. Dönüşümün başarısız olduğunu fark eder ama temel varsayımının yanlış olduğunu fark edemez. Burada araştırmacının metabilişsel müdahalesi gerekir. Döngü durdurulur ve soru değiştirilir: dosya neden bu dönüşüme direniyor? Çoğunlukla yanıt, dosyanın beklenenden farklı bir kodlamada ya da yapıda olmasıdır. Araştırmacı bu farkı modele açıkça bildirdiğinde döngü kırılır. Bu örnek, iletişim sorunlarında çözümün çoğunlukla daha fazla deneme değil, varsayımı yeniden ifade etme olduğunu gösterir.

## 5. Yedi Adımlı Muhakeme Çerçevesi

Üç kategori sorunu yerleştirmeye yarar. Onu çözmek için bir muhakeme çerçevesi gerekir. Aşağıdaki yedi adımlı protokol, Polya'nın (1945/2014) klasik dört aşamalı çerçevesinin, yani anla, planla, uygula ve geriye bak aşamalarının, sosyal bilim yapay zeka iş akışına genişletilmiş halidir. Çerçeve, üç kategorideki sorunların büyük çoğunluğu için işler, çünkü genel bir düşünme disiplinidir, belirli bir komuta bağlı değildir.

| Adım | Ad | Soru | Polya karşılığı |
|---|---|---|---|
| 1 | Şüpheci ol | İlk açıklama doğru mu, yoksa en kolay açıklama mı | Anla |
| 2 | Kaydı al | Hata mesajı, log, ekran görüntüsü tam olarak ne diyor | Anla |
| 3 | Çoğalt | Sorun güvenilir biçimde yeniden üretilebiliyor mu | Anla |
| 4 | Daralt | Sorunu en küçük örneğe indirgeyebilir miyim | Planla |
| 5 | İzole et | Hangi tek değişken sorunu açıyor | Planla |
| 6 | Düzelt | En küçük doğru değişiklik nedir | Uygula |
| 7 | Belgele | Kök neden ve çözüm gelecekteki ben için nasıl kaydedilir | Geriye bak |

İlk adım şüpheci olmaktır: karşılaşılan ilk açıklama çoğunlukla en kolay açıklamadır, en doğru olan değil. Bir sorunu kabul edilen ilk hikayeyle kapatmak kök nedeni gölgede bırakır. İkinci adım kaydı almaktır. Hata mesajının, logun ya da beklenmedik çıktının tam metni bellekten değil kaynaktan alınır. Üçüncü adım çoğaltmaktır: bir sorun güvenilir biçimde yeniden üretilemiyorsa, çözüldüğü de doğrulanamaz. Bu üç adım Polya'nın anlama aşamasına karşılık gelir. Dördüncü adım daraltmaktır. Sorun, onu açan en küçük örneğe indirgenerek gereksiz değişkenler elenir. Beşinci adım izole etmektir: tek bir değişken değiştirilip etkisi gözlemlenerek nedensellik rastlantıdan ayrılır. Bu iki adım planlama aşamasıdır. Altıncı adım düzeltmektir. Çözüm en küçük doğru değişiklik olmalıdır, çünkü geniş bir müdahale yeni sorunlar doğurur. Yedinci adım belgelemektir: kök neden ve çözüm, kasaya kısa bir not olarak yazılır, böylece aynı sorun ikinci kez karşımıza çıktığında yanıt hazırdır. Dörner (1996), karmaşık durumlarda insan karar vermesini incelediği eserinde, başarısızlığın çoğunlukla yan etkileri ve gecikmeli sonuçları göz ardı etmekten doğduğunu gösterir. Yedinci adım, belgeleme, tam da bu körlüğe karşı bir savunmadır. Bugün belgelenen bir çözüm, gelecekteki bir başarısızlığı önler.

Çerçeveyi tek bir örnekte yürütmek onu somutlaştırır. Bir araştırmacının atıf doğrulama akışı sessizce hatalı bir künye üretmektedir. Birinci adımda araştırmacı şüpheci olur, çünkü künye doğru görünmektedir ama akış son zamanlarda güncellenmiştir. İkinci adımda akışın çıktısı ve girdisi tam olarak kaydedilir. Üçüncü adımda sorun yeniden üretilir. Aynı kaynak yeniden işlenince aynı hatalı künye çıkar, demek ki sorun rastlantısal değildir. Dördüncü adımda sorun daraltılır, tek bir kaynakla denenir ve hata sürer. Beşinci adımda değişkenler izole edilir. Kaynağın yıl alanı boşaltılınca hatanın kaybolduğu görülür, yani sorun yıl ayrıştırmasındadır. Altıncı adımda en küçük doğru değişiklik yapılır, yıl alanının ayrıştırma kuralı düzeltilir, akışın geri kalanına dokunulmaz. Yedinci adımda kök neden ve çözüm kasaya yazılır. Aynı ayrıştırma hatası bir daha karşımıza çıktığında çözüm hazırdır. Yedi adım, bir sezgiyi bir yönteme dönüştürür.

## 6. Türkiye ve Yunanistan Özgüllüğü

Bazı sorunlar bölgeseldir. Türkiye'de, özellikle büyük şehirler dışındaki illerde, internet bağlantısı zaman zaman kesintili olabilir ve bazı dış servislere erişim engellenebilir. Yunanistan'ın kuzey şehirlerinde, Komotini ve çevresinde, fiber altyapısının değişkenliği benzer bir konudur. Bu durumlarda bir araç sorunu aslında ağ sorunudur ve aracın kendisinde aranan çözüm boşa çıkar. Sorun ağ kaynaklı göründüğünde birkaç pratik adım denenebilir: alternatif bir DNS sunucusu, bağlantının kararlı olduğu bir saat dilimine işi kaydırmak ya da kurumsal bir ağ üzerinden çalışmak. Detaylı ağ yapılandırması bu broşürün kapsamı dışındadır ve rehberin ilerleyen sürümlerine bırakılır. Buradaki kritik nokta, bölgesel bir altyapı koşulunu araç kusuruyla karıştırmamaktır. Çevre illerden ya da değişken bir hattan çalışan bir araştırmacı, ağ katmanını sorun giderme protokolünün ilk adımlarına dahil etmelidir.

## 7. GitHub Issue Şablonu, Başkasına Yardımcı Olmak

Sorun giderme yalnızca kendi sorununu çözmek değildir. Bir sorunun iyi belgelenmesi, aynı sorunu yaşayan başka bir araştırmacıya da yardımcı olur. Açık kaynak topluluğunun kurucu jesti budur. Bir sorunu GitHub issue olarak bildirmek, onu paylaşılabilir bir bilgiye dönüştürür. İyi bir issue, yedi adımlı çerçevenin ikinci ve üçüncü adımlarının, yani kaydı almanın ve çoğaltmanın, yazılı karşılığıdır. Önerilen yapı aşağıdadır.

```
**Sorun başlığı.** kısa, tek satır
**Versiyon.** Claude Code sürümü ve işletim sistemi
**Beklenen.** ne olmasını umdunuz
**Gerçekleşen.** ne oldu
**Çoğaltma adımları.**
1. ...
2. ...
**İlgili log ya da hata mesajı.**
```

```
hata logu buraya
```

```
**Daha önce denenenler.** hangi çözümler işe yaramadı
**Sorunun kategorisi.** araç, bilgi, iletişim ya da belirsiz
```

Bu şablonun gücü, sorunu bildiren kişiyi sorunu düşünmeye zorlamasındadır. Beklenen ile gerçekleşen arasındaki farkı yazmak sorunu netleştirir. Çoğaltma adımlarını sıralamak, sorunun gerçekten çoğaltılabilir olup olmadığını sınar. Daha önce denenenleri belgelemek, yardım eden kişinin aynı çıkmaz yolları tekrar etmesini önler. Vaughan (1996), NASA'nın Challenger kararını incelediği çalışmasında, ve Perrow (1999), yüksek riskli teknolojilerde normal kazaları çözümlediği eserinde, sistemik başarısızlıkların tek bir hatadan değil, küçük ve görünüşte zararsız sapmaların birikmesinden doğduğunu gösterir. İyi belgelenmiş bir issue, bu sapmaları görünür kılar ve topluluğun ortak hafızasına ekler. Bir sorunu paylaşmak, onu yalnız taşımaktan hem daha hızlı hem daha onurludur.

## 8. Kapanış, Dizinin Son Satırı

Bu broşür, on broşürlük v1.0 manifestosunun sonuncusudur, ve bu bölüm dizinin kapanışıdır. Rehber boyunca tek bir tez işlendi: Claude Code, sosyal bilimci için yalnızca bir komut satırı aracı değil, akademik üretimin metodolojik bir ortağıdır, ve bu ortaklık ancak bir çerçeveyle, bir disiplinle ve bir etikle anlam kazanır. İlk broşür Claude Code'un ne olduğunu epistemolojik düzeyde tanımladı. Yöntemsel omurga broşürleri hafızayı, kasa mimarisini ve bölgesel akademik erişimi kurdu. Üretim çevrimi broşürleri yazımı, etiği ve hakem değerlendirmesini ele aldı. Bu son broşür, işler ters gittiğinde başvurulacak muhakeme çerçevesini verdi.

Sorun gidermenin bir hata listesi değil bir muhakeme çerçevesi olması, rehberin baştan sona savunduğu tezin son ve tutarlı uzantısıdır. Liste eskir, çerçeve kalır. On broşürün hepsi okunduğunda, sosyal bilim araştırmacısının elinde, Claude Code ile akademik üretime başlamak için yeterli olmasa bile, doğru yöne ilk adımı atmak için yeterli bir çerçeve vardır. Geri kalanı, pratiğin kendi sınavı olacaktır.

## Kaynakça

Dörner, D. (1996). *The logic of failure: Why things go wrong and what we can do to make them right*. Metropolitan Books. ISBN 978-0-8050-4160-6

Norman, D. A. (2013). *The design of everyday things* (Revised and expanded ed.). Basic Books. ISBN 978-0-465-05065-9

Perrow, C. (1999). *Normal accidents: Living with high-risk technologies* (Updated ed.). Princeton University Press. ISBN 978-0-691-00412-9

Pólya, G. (2014). *How to solve it: A new aspect of mathematical method*. Princeton University Press. (Orijinal eser 1945 yılında yayımlanmıştır). ISBN 978-0-691-16407-6

Reason, J. (2000). Human error: Models and management. *BMJ*, 320(7237), 768-770. https://doi.org/10.1136/bmj.320.7237.768

Schoenfeld, A. H. (1985). *Mathematical problem solving*. Academic Press. ISBN 978-0-12-628870-4

Vaughan, D. (1996). *The Challenger launch decision: Risky technology, culture, and deviance at NASA*. University of Chicago Press. ISBN 978-0-226-85176-1

---

**Broşür kimliği.** `012-01-0001`
**Sürüm.** `0.1.0`
**Tarih.** 2026-05-24
**Sözcük sayısı (yaklaşık).** 2390 (Türkçe gövde metni, wc ile ölçüldü)
**Doğrulanmış atıf sayısı.** 7
**Halüsinasyon atıf sayısı.** 0
**Önceki broşür.** [`010-01-0001`](../../010-peer-review/010-01-0001/tr.md). İzlenebilirlik Matrisleri ile Hakem Yanıt Mektupları
**Sonraki broşür.** Yok. Bu, v1.0 manifestosunun kapanış broşürüdür. Yol haritası, kategori 005 (Hooks), 006 (MCP) ve 008 (Veri Analizi) ile v1.5 ve v2.0 sürümlerinde genişler.
