---
title_en: "Statistical Test Selection with AI Consultation Discipline"
title_tr: "Yapay Zekâ Danışma Disipliniyle İstatistiksel Test Seçimi"
booklet_id: "008-02-0001"
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

# Yapay Zekâ Danışma Disipliniyle İstatistiksel Test Seçimi

Bu kategorinin ilk broşürü, ajansal nicel analizin yeniden üretilebilirlik omurgasını kurdu. Bu broşür, o analizin çıkarımsal kalbine iner: hangi testin çalıştırılacağı kararına. Anthropic'in 2026 taraması, ankete katılan sosyal bilimcilerin coding agent'ı en çok nicel veriyi analiz etmek için kullandığını, ve aynı araştırmacıların yapay zekânın seçici raporlamayı kötüleştirmesinden çekindiğini kaydeder (Lyttelton ve diğerleri, 2026). Test seçimi, tam da bu korkunun ya gerçekleştiği ya da disipline edildiği yerdir. Bir ajan her testi anında önerebildiğinde, hangi testi seçtiğiniz artık yavaş bir düşünme sürecinin değil, bir istem uzaklığındaki ani bir kararın ürünüdür. Bu broşür, o danışmayı dürüst ve savunulabilir tutmanın disiplinini ele alır.

## 1. Test seçimi neden ajansal çağda kritik bir karardır

Bir istatistiksel test, bir çıkarım taahhüdüdür. Hangi testi çalıştırdığınız, veriden ne iddia edebileceğinizi belirler. Bir ajan bu kararı tek bir hamlede sıkıştırır: bir test önerir, gerekçesini açıklar, çalıştırır ve sonucu yorumlar. Anthropic'in taraması, ankete katılan araştırmacıların kullanımının bu yöne, otonom analize yoğunlaştığını gösterir (Lyttelton ve diğerleri, 2026).

Test seçimi eskiden yavaş bir süreçti. Araştırmacı uzun düşünür, belki bir istatistik danışmanına başvururdu. Bu yavaşlık, istemeden de olsa bir koruma işlevi görürdü. Şimdi ajan, her an ulaşılabilir bir danışmandır. Hız değişti, ama sorumluluk değişmedi. Danışman her an kapıda beklese de kararın gerekçesini araştırmacı taşımalıdır. Bu yük başkasına devredilemez. Bir testi seçmek, o testin varsaydığı dünyayı, ölçüm düzeyini ve örneklem yapısını kabul etmektir. Bu kabulü ajan değil, araştırmacı imzalar.

## 2. Araştırmacı serbestlik dereceleri ve test seçiminin esnekliği

Bir veri seti karşısında araştırmacının verdiği kararlar bir serbestlik dereceleri kümesi oluşturur. Simmons ve diğerleri (2011), bu serbestlik derecelerinin açıkça raporlanmadığında neredeyse her sonucu istatistiksel olarak anlamlı gösterebileceğini deneysel olarak ortaya koyar. Test seçimi, bu serbestlik derecelerinin en büyüklerinden biridir. Aynı hipotez, bir parametrik testle anlamsız, bir parametrik olmayan testle anlamlı çıkabilir.

Wicherts ve diğerleri (2016), psikolojik çalışmaların planlanması, yürütülmesi, analizi ve raporlanmasındaki serbestlik derecelerini bir kontrol listesinde toplar ve bunların p-değeri avcılığına nasıl yol açtığını gösterir. Bu listenin değeri, kararları önceden görünür kılmasıdır. Bir ajana hangi testi kullanmalıyım diye sorulduğunda, ajan birkaç seçenek sunabilir, ve en cazip seçenek çoğu zaman anlamlılık verendir. Wicherts ve diğerlerinin kontrol listesi, bu cazibeyi insan tarafında dizginleyen disiplindir. Serbestlik dereceleri, ajana danışmadan önce sayılır.

## 3. Çatallanan yolların bahçesi, test seçiminde

Gelman ve Loken (2014), veriye bağlı analitik kararların görünmez bir çoklu karşılaştırmalar ağacı yarattığı durumu çatallanan yolların bahçesi olarak adlandırır. Test seçimi, bu bahçenin en sık yürünen patikasıdır. Veriye bakıp dağılımın normallikten saptığını görmek, sonra parametrik olmayan bir teste geçmek, ve o testin anlamlı çıkması, niyet dürüst olsa bile veriye bağlı bir karardır. Karar veriden sonra verildiğinde, raporlanan p-değeri artık dürüst bir olasılık değildir.

Bir ajan, her patikayı bir istem uzaklığına indirir. Araştırmacının saatler harcayacağı test alternatiflerini saniyeler içinde dener ve en temiz görüneni sunar. Çatallanma kaybolmaz, hızlanır ve gözden gizlenir. Dolayısıyla test seçiminde çatallanan yollar problemi, ajansal akışta daha az değil, daha çok dikkat ister.

## 4. Çok-evrenli analiz, ajansal hızın erdeme dönüşmesi

Bu sorunun güçlü bir yanıtı, tek bir spesifikasyonu gizlemek yerine hepsini açığa çıkarmaktır. Steegen ve diğerleri (2016), savunulabilir tüm analitik kararların oluşturduğu sonuç uzayını sistematik olarak hesaplayan çok-evrenli analizi önerir. Tek bir testin tek bir sonucu yerine, makul testlerin tamamının verdiği sonuç dağılımı raporlanır. Silberzahn ve diğerleri (2018), aynı veri setini bağımsız analiz eden çok sayıda ekibin farklı analitik seçimlerle farklı sonuçlara ulaştığını ampirik olarak gösterir. Ortaya çıkan tablo açıktır: analitik kararlar önemsiz bir ayrıntı değil, bulgunun kendisini biçimlendiren bir kuvvettir.

Tam burada ajansal hız, bir kusurdan bir erdeme döner. Çok-evrenli analiz, elle yapıldığında pahalıydı. Onlarca spesifikasyonu tek tek kurmak ve çalıştırmak günler alırdı. Ajan, her şeyi denemeye zaten yatkın olduğundan bu analizi ucuzlatır. Ajanın her testi denemesini gizli bir balık avına bırakmak yerine, onu açıkça raporlanan bir spesifikasyon eğrisine yönlendirin. Spesifikasyon kümesi sonuçlara bakılmadan önce sabitlendiği sürece, aynı kolaylık seçici raporlamanın aracı olmaktan çıkıp şeffaflığın aracı olur.

## 5. Önceden belirtim ile keşfi ayırmak

Çok-evrenli raporlama bile, doğrulayıcı iddianın önceden sabitlenmesini gerektirir. Nosek ve diğerleri (2018), ön kaydın doğrulayıcı ile keşfedici analizi ayırarak serbestlik derecelerini kontrol altına aldığını savunur. Ajansal test seçiminde bunun anlamı nettir. Asıl testi ve onun varsayımlarını, ajana danışmadan önce yazın. Ajanın keşif sırasında önerdiği her alternatif, keşfedici olarak etiketlenir ve doğrulayıcı sonucun yerine geçmez.

Bu, önceki broşürde tanıtılan spesifikasyon günlüğünün test seçimine uygulanmış hâlidir (broşür 008-01-0001). Danışma hoş karşılanır, ama taahhüt önceden verilmiştir. Ajan bir testi önerdiğinde, soru şudur: bu test, veriyi gördükten sonra mı, yoksa plan aşamasında mı seçildi. Bu ayrım günlüğe işlendiğinde, ajanın ürettiği zenginlik bir tehdit değil, bir duyarlılık analizi olur.

## 6. Bulan notlayan olamaz, testin varsayımlarına uygulanmış

Bu rehberin tekrar eden ilkesini test seçimine uyguladığımızda, özellikle keskin bir nokta ortaya çıkar. Bir ajan testi çalıştırıp varsayımlar karşılandı diyebilir, oysa normallik, varyans eşitliği ya da bağımsızlık tanılarını gerçek anlamda denetlememiş olabilir. Sorun, akıcı bir gerekçenin doğrulanmış bir gerekçeyle karıştırılmasıdır. İkisi çoğu zaman aynı görünür ve çoğu zaman farklı anlama gelir.

Bu kırılganlığın kökü, modelin nasıl çalıştığında yatar. Dil modeli, anlayarak değil istatistiksel örüntü üreterek çalışır. Bu özellik en titiz talimatla bile ortadan kalkmaz (Bender ve diğerleri, 2021). Üretilen metnin epistemik bir sorunu vardır: doğru görünmek ile doğru olmak arasındaki farkı kendiliğinden gözetmez (Hicks ve diğerleri, 2024). Test varsayımlarını bu açıdan değerlendirmek araştırmacının işidir. Ajanın önerisi bir başlangıç noktasıdır, bir son hüküm değil. Varsayım tanıları ham çıktıya karşı bağımsız olarak gözden geçirilmeli, ajanın sunduğu yoruma değil, sayıların kendisine bakılmalıdır.

## 7. Danışmayı al, kararı devretme

Ajansal analizde devredilebilen ile devredilemeyen arasındaki çizgi, test seçiminde özellikle keskindir. Devredilebilen, danışmanın kendisidir. Ajan, aday testleri sıralayabilir, ödünleşimleri açıklayabilir, her birini hesaplayabilir. Devredilemeyen, karardır. Araştırma sorusuna hangi testin cevap verdiği, hangi varsayımın alanın kuramı ve verinin bağlamı altında savunulabilir olduğu araştırmacıda kalır.

Bu, danışma disiplininin özüdür. Ajan, bilgili ama sorumluluğu olmayan bir danışman gibi ele alınır. Onun tavsiyesini almak meşrudur, ama o tavsiyeyi tek başınıza savunabilmeniz gerekir. Talimat dosyası yordamı dışsallaştırır, yargıyı değil (broşür 001-01-0004). Ajan testi hesaplar, araştırmacı testi seçer ve sonucun arkasında durur.

## 8. Pratikte, bir test seçimi danışma protokolü

Bu disiplin, somut ve uygulanabilir bir protokole iner. Asıl testi ve varsayımlarını ajana danışmadan önce yazın ve günlüğe işleyin. Ajandan tek bir test değil, savunulabilir alternatiflerin tamamını sıralamasını isteyin. Makul spesifikasyonların çok-evrenli analizini çalıştırın ve sonuç dağılımını raporlayın, tek bir temiz sonucu değil. Varsayım tanılarını ham çıktıya karşı bağımsız doğrulayın. Doğrulayıcı ve keşfedici analizleri günlükte ayırın. Son olarak, ajanın danışmanlık rolünü yöntem ya da katkı beyanında ifşa edin.

Bu protokol, Wicherts ve diğerlerinin (2016) serbestlik dereceleri kontrol listesini, çok-evrenli raporlamayı ve ön kayıt zihniyetini ajansal bir danışma akışında birleştirir. Ajan, test uzayını hızla tarayan bir danışmandır. Protokol, o hızı şeffaflığın hizmetine koşar. Onsuz, danışmanın kolaylığı seçici raporlamayı besler. Onunla, danışma savunulabilir bir çıkarımın parçası olur.

## 9. Bir sonraki broşür

Bu broşür, test seçimini bir danışma disiplinine bağladı. Veri analizi kategorisinin bir sonraki broşürü, nitel kodlamada yapay zekâ yardımını ve insan gözetimini ele alacak. Bu arada, ajanın analitik rolünün dürüst ifşası, etik broşüründe daha geniş bir çerçeveye oturur. Broşür 009-01-0001 buradan devam eder.

---

## Kaynakça

Atıflar APA 7 biçimindedir. Her DOI ve tanımlayıcı, 2026-05-29 tarihinde Crossref, doi.org veya yayıncı sayfası üzerinden bağımsız olarak doğrulanmıştır.

Bender, E. M., Gebru, T., McMillan-Major, A., & Shmitchell, S. (2021). On the dangers of stochastic parrots: Can language models be too big? In *Proceedings of the 2021 ACM Conference on Fairness, Accountability, and Transparency (FAccT '21)* (pp. 610-623). Association for Computing Machinery. https://doi.org/10.1145/3442188.3445922

Gelman, A., & Loken, E. (2014). The statistical crisis in science. *American Scientist*, 102(6), 460. https://doi.org/10.1511/2014.111.460

Hicks, M. T., Humphries, J., & Slater, J. (2024). ChatGPT is bullshit. *Ethics and Information Technology*, 26(2), 38. https://doi.org/10.1007/s10676-024-09775-5

Lyttelton, T., Massenkoff, M., & Wilmers, N. (2026). *Coding agents in the social sciences*. Anthropic. https://www.anthropic.com/research/coding-agents-social-sciences

Nosek, B. A., Ebersole, C. R., DeHaven, A. C., & Mellor, D. T. (2018). The preregistration revolution. *Proceedings of the National Academy of Sciences*, 115(11), 2600-2606. https://doi.org/10.1073/pnas.1708274114

Silberzahn, R., Uhlmann, E. L., Martin, D. P., Anselmi, P., Aust, F., Awtrey, E., Bahník, Š., Bai, F., Bannard, C., Bonnier, E., Carlsson, R., Cheung, F., Christensen, G., Clay, R., Craig, M. A., Dalla Rosa, A., Dam, L., Evans, M. H., Flores Cervantes, I., ... Nosek, B. A. (2018). Many analysts, one data set: Making transparent how variations in analytic choices affect results. *Advances in Methods and Practices in Psychological Science*, 1(3), 337-356. https://doi.org/10.1177/2515245917747646

Simmons, J. P., Nelson, L. D., & Simonsohn, U. (2011). False-positive psychology: Undisclosed flexibility in data collection and analysis allows presenting anything as significant. *Psychological Science*, 22(11), 1359-1366. https://doi.org/10.1177/0956797611417632

Steegen, S., Tuerlinckx, F., Gelman, A., & Vanpaemel, W. (2016). Increasing transparency through a multiverse analysis. *Perspectives on Psychological Science*, 11(5), 702-712. https://doi.org/10.1177/1745691616658637

Wicherts, J. M., Veldkamp, C. L. S., Augusteijn, H. E. M., Bakker, M., van Aert, R. C. M., & van Assen, M. A. L. M. (2016). Degrees of freedom in planning, running, analyzing, and reporting psychological studies: A checklist to avoid p-hacking. *Frontiers in Psychology*, 7, 1832. https://doi.org/10.3389/fpsyg.2016.01832

---

**Broşür kimliği.** `008-02-0001`
**Sürüm.** `0.1.0`
**Tarih.** 2026-05-29
**Sözcük sayısı (yaklaşık).** 1130
**Doğrulanmış atıf sayısı.** 9
**Halüsinasyon atıf sayısı.** 0
**Önceki broşür.** [`008-01-0001`](../008-01-0001/tr.md). Yeniden Üretilebilir Nicel İş Akışları
**Sonraki broşür.** [`009-01-0001`](../../009-ethics-irb/009-01-0001/tr.md). Yapay Zekâ Destekli Araştırmada Etik, Prensipten Davranışa
