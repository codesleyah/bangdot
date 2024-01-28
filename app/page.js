

export default function Home() {
  return (
     <main className="w-full h-full bg-white flex items-center justify-center p-12">
         <div className="flex flex-col md:grid md:grid-cols-4 gap-4 w-full h-full items-center justify-center">
            <div className="col-span-3 gap-4">
              <div className="md:hidden">
              <iframe width="300" height="100" scrolling="no" frameborder="0" allowtransparency="true" marginheight="0" marginwidth="0" name="spot_id_10002803" src="//a.adtng.com/get/10002803?ata=Sante01"></iframe>
              </div>
              
              <video className="w-full" controls>
                <source
                  src="/videos/vid1.mp4"
                  type="video/mp4"
                  />
              </video>
            </div>
            <div className="flex flex-col gap-4">
              <div>
              <iframe width="300" height="100" scrolling="no" frameborder="0" allowtransparency="true" marginheight="0" marginwidth="0" name="spot_id_10002803" src="//a.adtng.com/get/10002803?ata=Sante01"></iframe>
              </div>
              <div>
                <iframe  width="315" height="300" scrolling="no" frameborder="0" allowtransparency="true" marginheight="0" marginwidth="0" name="spot_id_10002488" src="//a.adtng.com/get/10002488?ata=Sante01"></iframe>
              </div>
              <div>
                <iframe width="300" height="100" scrolling="no" frameborder="0" allowtransparency="true" marginheight="0" marginwidth="0" name="spot_id_10001817" src="//a.adtng.com/get/10001817?ata=Sante01"></iframe>
              </div>
            </div>
         </div>
     </main>
  )
}
